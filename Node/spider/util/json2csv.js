const fs = require('fs');
const Json2csvTransform = require('json2csv').Transform;

// 筛选项
const defaultFields = [
  'group_name',
  'phone',
  'name',
  'address',
  "location_address",
  "operator_name",
  "bd_name",
  "location",
  "profile",
];
const transformOpts = { highWaterMark: 16384, encoding: 'utf-8' };

// 文件
const inputPath = './output/result_format2.txt'
const outputPath = './output/filter_result.csv'

/**
 * json2csv
 * @param {array} field 筛选项
 * @param {string} input json文件路径
 * @param {string} output 输出csv文件
 */
function json2csv(fields = defaultFields, input = inputPath, output = outputPath) {
  const opts = { fields };

  const json2csv = new Json2csvTransform(opts, transformOpts);
  const inputPipe = fs.createReadStream(input, { encoding: 'utf8' });
  const outputPipe = fs.createWriteStream(output, { encoding: 'utf8' });
  
  // run
  inputPipe.pipe(json2csv).pipe(outputPipe);

}

module.exports = json2csv;