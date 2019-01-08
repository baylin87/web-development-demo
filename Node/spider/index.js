const axios = require('axios');
const moment = require('moment');
const PromisedArray = require('./util/promised-array');
const write2file = require('./util/write2file');
const read2file = require('./util/read2file');
const { getPoiList } = require('./poi');
const formatList = require('./result_format.js')

const Ax = axios.create({
  baseURL:'https://xxx.com',
  headers: {
    'X-Bell-Token': 'x',
    'X-Session-Key': 'x',
  },
});

function fetchData(latLngObj, logName) {

  return Ax.post('/mall/gis/get-nearby-team', latLngObj).then(function (response){
    const resData = response.data.data.filter(item => item.province === '北京');
    if (resData.length > 0) {
      const filterIdList = resData.map(item => item.id);

      const logContent = {
        timeStamp: moment().format('YYYYMMDDhhmmss'),
        req: latLngObj,
        res: filterIdList,
      }
      // 写日志
      write2file(logName, logContent,',');
      // console.log('数量为：', resData.length);
      return resData;
    }
    return [];
  }).catch(function (error) {
    console.log(error, 'err');
  });
}

const list = [[40.03222,116.46],[39.03222,116.46]];


function getResult(pois = list) {
  const resultFileName = `./output/${moment().format('YYYYMMDD')}/result_detail3.json`;
  const logName = `./log/${moment().format('YYYYMMDDhhmmss')}-log.text`;
  const total = pois.length;

  PromisedArray.reduce(pois, (count, poi, index) => {
    console.log(`开始第 ${index + 1} 次抓取, 共${total}次,总进度${((index + 1) / total * 100).toFixed(1)}%`);
    return fetchData({
      lat: poi[1],
      lng: poi[0],
    }, logName).then((res) => {
      const list = Array.isArray(res) ? res : [];

      console.log(`本次抓取到 ${list.length} 条数据，总共抓取到了 ${res.length + count} 条数据`);
      write2file(resultFileName, list, index === 0 ? '[' : ',');

      if (index === pois.length - 1) {
        // 所有pois都请求完了
        write2file(resultFileName, null, ']').then(() => {
          console.log('抓取所有节点完成!');
          read2file(resultFileName).then((res) => {
            if (Array.isArray(res)) {
              formatList(res, `./output/${moment().format('YYYYMMDD')}/format/result_format_detail3.json`);
            } else {
              console.log('读取结果格式错误');
            }
          })
        });
      }

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(res.length + count);
        }, 5000 * Math.random());
      }).catch(function (error) {
        console.log(error, 'err resolve');
      });
    }).catch(err => {
      console.log(err, 'err res then');
    });
  }, 0);
}

const range = {
  x1: 116.490638,
  y1: 40.505428,
  x2: 117.212732,
  y2: 40.121646,
};
const dis = {
  x: 0.03,
  y: -0.03,
};
// console.log(getPoiList(range, dis));

getResult(getPoiList(range, dis));