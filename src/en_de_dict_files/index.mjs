import fs from 'fs';

import { default as dict0 } from './en_de-0.mjs';
import { default as dict1 } from './en_de-1.mjs';
import { default as dict2 } from './en_de-2.mjs';
import { default as dict3 } from './en_de-3.mjs';
import { default as dict4 } from './en_de-4.mjs';
import { default as dict5 } from './en_de-5.mjs';
import { default as dict6 } from './en_de-6.mjs';
import { default as dict7 } from './en_de-7.mjs';
import { default as dict8 } from './en_de-8.mjs';
import { default as dict9 } from './en_de-9.mjs';
import { default as dict10 } from './en_de-10.mjs';
import { default as dict11 } from './en_de-11.mjs';
import { default as dict12 } from './en_de-12.mjs';
import { default as dict13 } from './en_de-13.mjs';
import { default as dict14 } from './en_de-14.mjs';
import { default as dict15 } from './en_de-15.mjs';
import { default as dict16 } from './en_de-16.mjs';
import { default as dict17 } from './en_de-17.mjs';
import { default as dict18 } from './en_de-18.mjs';
import { default as dict19 } from './en_de-19.mjs';
import { default as dict20 } from './en_de-20.mjs';
import { default as dict21 } from './en_de-21.mjs';
import { default as dict22 } from './en_de-22.mjs';
import { default as dict23 } from './en_de-23.mjs';
import { default as dict24 } from './en_de-24.mjs';
import { default as dict25 } from './en_de-25.mjs';
import { default as dict26 } from './en_de-26.mjs';
import { default as dict27 } from './en_de-27.mjs';
import { default as dict28 } from './en_de-28.mjs';
import { default as dict29 } from './en_de-29.mjs';
import { default as dict30 } from './en_de-30.mjs';
import { default as dict31 } from './en_de-31.mjs';
import { default as dict32 } from './en_de-32.mjs';
import { default as dict33 } from './en_de-33.mjs';
import { default as dict34 } from './en_de-34.mjs';
import { default as dict35 } from './en_de-35.mjs';
import { default as dict36 } from './en_de-36.mjs';
import { default as dict37 } from './en_de-37.mjs';
import { default as dict38 } from './en_de-38.mjs';
import { default as dict39 } from './en_de-39.mjs';
import { default as dict40 } from './en_de-40.mjs';
import { default as dict41 } from './en_de-41.mjs';
import { default as dict42 } from './en_de-42.mjs';
import { default as dict43 } from './en_de-43.mjs';
import { default as dict44 } from './en_de-44.mjs';
import { default as dict45 } from './en_de-45.mjs';
import { default as dict46 } from './en_de-46.mjs';
import { default as dict47 } from './en_de-47.mjs';
import { default as dict48 } from './en_de-48.mjs';
import { default as dict49 } from './en_de-49.mjs';
import { default as dict50 } from './en_de-50.mjs';
import { default as dict51 } from './en_de-51.mjs';
import { default as dict52 } from './en_de-52.mjs';
import { default as dict53 } from './en_de-53.mjs';
import { default as dict54 } from './en_de-54.mjs';
import { default as dict55 } from './en_de-55.mjs';
import { default as dict56 } from './en_de-56.mjs';
import { default as dict57 } from './en_de-57.mjs';
import { default as dict58 } from './en_de-58.mjs';
import { default as dict59 } from './en_de-59.mjs';
import { default as dict60 } from './en_de-60.mjs';
import { default as dict61 } from './en_de-61.mjs';
import { default as dict62 } from './en_de-62.mjs';
import { default as dict63 } from './en_de-63.mjs';
import { default as dict64 } from './en_de-64.mjs';
import { default as dict65 } from './en_de-65.mjs';
import { default as dict66 } from './en_de-66.mjs';
import { default as dict67 } from './en_de-67.mjs';
import { default as dict68 } from './en_de-68.mjs';
import { default as dict69 } from './en_de-69.mjs';
import { default as dict70 } from './en_de-70.mjs';
import { default as dict71 } from './en_de-71.mjs';
import { default as dict72 } from './en_de-72.mjs';
import { default as dict73 } from './en_de-73.mjs';
import { default as dict74 } from './en_de-74.mjs';
import { default as dict75 } from './en_de-75.mjs';
import { default as dict76 } from './en_de-76.mjs';
import { default as dict77 } from './en_de-77.mjs';
import { default as dict78 } from './en_de-78.mjs';
import { default as dict79 } from './en_de-79.mjs';

const dictData = [
  dict0,
  dict1,
  dict2,
  dict3,
  dict4,
  dict5,
  dict6,
  dict7,
  dict8,
  dict9,
  dict10,
  dict11,
  dict12,
  dict13,
  dict14,
  dict15,
  dict16,
  dict17,
  dict18,
  dict19,
  dict20,
  dict21,
  dict22,
  dict23,
  dict24,
  dict25,
  dict26,
  dict27,
  dict28,
  dict29,
  dict30,
  dict31,
  dict32,
  dict33,
  dict34,
  dict35,
  dict36,
  dict37,
  dict38,
  dict39,
  dict40,
  dict41,
  dict42,
  dict43,
  dict44,
  dict45,
  dict46,
  dict47,
  dict48,
  dict49,
  dict50,
  dict51,
  dict52,
  dict53,
  dict54,
  dict55,
  dict56,
  dict57,
  dict58,
  dict59,
  dict60,
  dict61,
  dict62,
  dict63,
  dict64,
  dict65,
  dict66,
  dict67,
  dict68,
  dict69,
  dict70,
  dict71,
  dict72,
  dict73,
  dict74,
  dict75,
  dict76,
  dict77,
  dict78,
  dict79
];

function formatJSOnData(data) {
  return data.reduce((accum, entry) => {
    const [data] = Object.entries(entry);
    const [key, value] = data;
    const newValue = value?.examples.map(({ text, translation }) => ({ text, translation }));
    accum[key] = newValue;
    return accum;
  }, {});
}
let counter = 0;
function convertToJSON() {
  for (const dict of dictData) {
    const directory = `en_de_json/`;
    if (!fs.existsSync(directory)) fs.mkdirSync(directory, { recursive: true });
    const filePath = `${directory}en_de${counter}.json`;
    fs.writeFile(filePath, JSON.stringify(formatJSOnData(dict)), function (err) {
      if (err) throw err;
      //   console.log('complete');
    });
    counter++;
  }
}
convertToJSON();

export default dictData;
