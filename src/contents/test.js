/* eslint-disable no-undef */
// import { dictionary } from './dictionary';
import { default as dict } from '../en_de_dict_files';

function wrapAllElements() {
  function walkNodeTree(root, whatToShow = NodeFilter.SHOW_ALL, { inspect, collect, callback } = {}) {
    const walker = document.createTreeWalker(root, whatToShow, {
      acceptNode(node) {
        if (inspect && !inspect(node)) {
          return NodeFilter.FILTER_REJECT;
        }
        if (collect && !collect(node)) {
          return NodeFilter.FILTER_SKIP;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes = [];
    let n;
    while ((n = walker.nextNode())) {
      callback?.(n);
      nodes.push(n);
    }

    return nodes;
  }

  const PARENT_TAGS_TO_EXCLUDE = ['STYLE', 'SCRIPT', 'NOSCRIPT', 'CODE', 'BUTTON'];

  function textNodesUnder(el) {
    return walkNodeTree(el, NodeFilter.SHOW_TEXT, {
      inspect: textNode => !PARENT_TAGS_TO_EXCLUDE.includes(textNode.parentElement?.nodeName)
    });
  }

  //function textNodesUnder(el) {
  //    let n, a = [];
  //    let walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
  //    while (n = walk.nextNode()) a.push(n);
  //    return a;
  //}

  let textNodes = textNodesUnder(document.body);
  let filteredTextNodes = textNodes.filter(textNode => {
    if (textNode.textContent.replace(/\s+/g, ' ').trim()) {
      return true;
    } else {
      return false;
    }
  });

  filteredTextNodes.forEach(sentenceNode => {
    let previousElement = null;
    let sentenceArray = sentenceNode.textContent.replace(/\s+/g, ' ').trim().split(' ');
    sentenceArray.forEach((item, index) => {
      const span = document.createElement('orator-word');
      const translation = document.createElement('orator-translation');
      span.innerHTML = item + ' ';
      span.classList.add('tts-word');
      span.style.cssText = `
        // position: relative;
        // line-height: 2.2;
        // white-space: nowrap;
        /*-----------*/
         display: inline-flex;
         flex-direction: column-reverse;
         margin-left: 10px;
        `;

      span.appendChild(translation);
      if (index == 0) {
        span.classList.add('tts-word-first');
        sentenceNode.parentNode.replaceChild(span, sentenceNode);
      } else {
        previousElement.after(span);
      }
      //=======
      span.parentNode.style['line-height'] = '40px';
      previousElement = span;

      translation.innerHTML = item;

      translation.classList.add('tts-translation');
      translation.style.cssText = `
        // position: absolute;
        // left: 0%;
        // bottom: 80%;
        // font-size: 50%;
        // opacity: 0.5;
        // width: 100%;
        // text-align: center;
        // color: #000;
        // /*background: #ff00001f;*/
        // background: #e0f0ef;
        // /*border: 1px #0000002e solid;*/
        // /*border-radius: 5px;*/
        // white-space: break-spaces;
        /*-----------*/
        opacity: 0.5;
        color: #f00;
        background: #e0f0ef;
        display: inline-flex;
        flex-direction: column;
        font-size: 10px;
        font-weight: 500;
        line-height: 100%; 
        max-width: 60px;
    `;
    });
    previousElement = null;
  });
}

function combineAllDictionaryData() {
  return dict.reduce((accumulator, entry_) => {
    let [entry] = Object.entries(entry_);
    const [word, value] = entry;
    accumulator[word] = value;
    return accumulator;
  }, {});
}
function translateWords() {
  //   ======================================
  const de_en_DictOBJ = combineAllDictionaryData();
  //   console.log('debug: ', dictOBJ);
  //   ======================================

  const translations = document.querySelectorAll('orator-translation');
  translations.forEach(element => {
    const word = element.textContent.toLowerCase().replace(/\W+/g, '').trim();
    //   ======================================
    console.log('word: ', word);
    console.log('de_en_DictOBJ[word]: ', de_en_DictOBJ[word]);
    const translation = de_en_DictOBJ[word]?.dictData?.ms_translate_form;
    //==========================================
    if (!translation) {
      element.textContent = '';
      return;
    }
    element.innerHTML = translation
      .split(',')
      .map(item => {
        const style = `
                border: 1px solid rgba(0, 128, 0, 0.46);
                border-radius: 4px;
                padding: 2px;
                color:#f00;
                text-align: center;
                `;
        return `<span style="${style}">${item}</span>`;
      })
      .join('');
  });
}

function unwrapAllElements() {
  document.querySelectorAll('orator-translation').forEach(element => element.remove());
  //   let textNode = null;
  //   document.querySelectorAll('orator-word').forEach(element => {
  //     if (element.classList.contains('tts-word-first')) {
  //       textNode = document.createTextNode(element.textContent);
  //       element.parentNode.replaceChild(textNode, element);
  //     } else {
  //       textNode.textContent = `${textNode.textContent} ${element.textContent}`;
  //       element.remove();
  //     }
  //   });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Received a message from background service
  switch (request.message) {
    case 'translate-page':
      wrapAllElements();
      translateWords();
      break;
    case 'reset-page':
      unwrapAllElements();
      break;
  }
});
