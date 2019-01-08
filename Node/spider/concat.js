const read2file = require('./util/read2file');
const write2file = require('./util/write2file');
const json2csv = require('./util/json2csv');
const moment = require('moment');


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

const diff = (list, fileName = './output/result_format4.txt') => {
  const flat = list;
  console.log(`合并总共有 ${flat.length} 条数据`);

  const map = {};
  const uniqueList = flat.filter((item) => {
    if (map[item.id]) return false;

    map[item.id] = true;
    return true;
  });

  console.log(`diff之后为总共有 ${uniqueList.length} 条数据`);
  
  write2file(fileName, uniqueList).then(() => {
    json2csv(field,fileName, `./output/${moment().format('YYYYMMDD')}/format/${moment().format('hhmmss')}filerResult.csv`);
  });;
};



function concatList(nameFirst, nameSecond, outName = './output/20181228/concat.json') {
  read2file(nameFirst).then((res) => {
    if (Array.isArray(res)) {
      const list1 = res;
      read2file(nameSecond).then((ress) => {
        if (Array.isArray(ress)) {
          const list2 = list1.concat(ress);
          diff(list2, outName);
        }
      })
    } else {
      console.log('concat读取结果格式错误');
    }
  })
}

module.exports = concatList