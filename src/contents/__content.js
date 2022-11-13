chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Received a message from background service
  if (request.message === 'clicked_browser_action') {
    // chrome.runtime.sendMessage({ message: 'open_new_tab' });
    wrapAllElements();
    translateWords();
  }
});

function wrapAllElements() {
  function walkNodeTree(
    root,
    whatToShow = NodeFilter.SHOW_ALL,
    { inspect, collect, callback } = {}
  ) {
    const walker = document.createTreeWalker(root, whatToShow, {
      acceptNode(node) {
        if (inspect && !inspect(node)) {
          return NodeFilter.FILTER_REJECT;
        }
        if (collect && !collect(node)) {
          return NodeFilter.FILTER_SKIP;
        }
        return NodeFilter.FILTER_ACCEPT;
      },
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
      inspect: (textNode) => !PARENT_TAGS_TO_EXCLUDE.includes(textNode.parentElement?.nodeName),
    });
  }

  //function textNodesUnder(el) {
  //    let n, a = [];
  //    let walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
  //    while (n = walk.nextNode()) a.push(n);
  //    return a;
  //}

  let textNodes = textNodesUnder(document.body);
  let filteredTextNodes = textNodes.filter((textNode) => {
    if (textNode.textContent.replace(/\s+/g, ' ').trim()) {
      return true;
    } else {
      return false;
    }
  });

  filteredTextNodes.forEach((sentenceNode) => {
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
    `;
    });
    previousElement = null;
  });
}

function unwrapAllElements() {
  document.querySelectorAll('orator-translation').forEach((element) => element.remove());
  let textNode = null;
  document.querySelectorAll('orator-word').forEach((element) => {
    if (element.classList.contains('tts-word-first')) {
      textNode = document.createTextNode(element.textContent);
      element.parentNode.replaceChild(textNode, element);
    } else {
      textNode.textContent = `${textNode.textContent} ${element.textContent}`;
      element.remove();
    }
  });
}

function translateWords() {
  const translations = document.querySelectorAll('orator-translation');
  translations.forEach((element) => {
    const word = element.textContent.toLowerCase();
    const translation = dictionary[word];
    if (!translation) {
      element.textContent = '';
      return;
    }
    element.innerHTML = translation
      .split(',')
      .map((item) => {
        const style = `
                border: 1px solid rgba(0, 128, 0, 0.46);
                border-radius: 4px;
                padding: 2px;
                color:#f00;
                `;
        return `<span style="${style}">${item}</span>`;
      })
      .join('');
  });
}

const dictionary = {
  tinnitus: 'Einmaleins {n} [Grundkenntnisse]: noun',
  ringing: '„Zum Geleit“:',
  in: 'Herzogenbusch {n}: noun',
  the: 's ist [meist poet.: es ist]:, es ist:',
  ears: 's war:',
  and: '-bar: suffix, -fähig: suffix',
  what: '-al: suffix',
  to: 'schnäbelig: suffix, schnäblig: suffix',
  do: 'schnäbelig: suffix, schnäblig: suffix',
  about: '-stämmig: suffix',
  it: '-beschichtet: suffix',
  '-cyme': '-zym: suffix',
  '-driven': '-gesteuert: suffix',
  '-engined': '-motorig: suffix',
  '-esque': '-artig: suffix, -esk: suffix, -mäßig: suffix',
  '-eyed': '-äugig: suffix',
  '-figure': '-stellig: adj',
  '-fold': '-fach: suffix',
  '-footed': '-füßig: adj',
  '-ful': '-voll: suffix',
  '-haired': '-haarig: suffix',
  '-headed': '-köpfig: adj',
  '-hearted': '-herzig: adj',
  '-hood': '-heit: suffix',
  '-ic': '-isch: suffix',
  '-ish': '-haft: suffix, -isch: suffix, -lich: suffix',
  '-ism': '-ismus: suffix',
  '-ist': '-ist: suffix',
  '-ize': '-isieren: suffix',
  '-legged': '-beinig: adj',
  '-less': '-los: suffix',
  '-like': '-artig: suffix',
  '-master': '-meister: suffix',
  '-meister': '-meister: suffix',
};
