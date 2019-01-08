const json2csv = require('./util/json2csv');


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

json2csv(field,'./output/20181228/format/concat_result.json', './output/20181228/format/20181228filerResult.csv');