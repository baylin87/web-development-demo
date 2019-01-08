const write2file = require('./util/write2file');
const json2csv = require('./util/json2csv');
const moment = require('moment');
const concatList = require('./concat');

const field = [
  'group_name',
  'phone',
  'name',
  'address',
  // "location_address",
  "operator_name",
  "bd_name",
  "lng",
  "lat",
  // "location",
  "profile",
];

function flatList(songs){
  let finalResult=[];

  songs.forEach((itemList) => {
    itemList.forEach(item => {
      finalResult.push(item)
    })
  })
  console.log('未过滤共', finalResult.length);

  return finalResult;
}

const main = (list, fileName = './output/result_format4.txt') => {
  const flat = flatList(list)
  console.log(`总共有 ${flat.length} 条数据`);

  const map = {};
  const uniqueList = flat.filter((item) => {
    if (map[item.id]) return false;

    map[item.id] = true;
    return true;
  });

  console.log(`滤重之后为总共有 ${uniqueList.length} 条数据`);
  
  write2file(fileName, uniqueList).then(() => {
    // json2csv(field,fileName, `./output/${moment().format('YYYYMMDD')}/format/${moment().format('hhmmss')}filerResult.csv`);
    concatList('./output/20181228/concat2.json', fileName, './output/20181228/concat3.json');
  });
};

const format2tools = (list) => {
  console.log(list.map((item, index) => `${index}\t${item.location.lng}\t${item.location.lat}`).join('\n'));
}

// main(require('./result_format.json'));

// format2tools(require('./output/result_format2.json'));

// main(require('./output/result6.json'));
module.exports = main
