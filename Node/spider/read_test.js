const read2file = require('./util/read2file');

function get() {
  read2file('result_format2.json').then((res) => {
    console.log(res.length);
  })
}

get();