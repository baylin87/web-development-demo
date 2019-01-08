const fs = require("fs");


function writeFile(name = 'nearBy.json', jsonData, prefix = '') {
  let Str = jsonData === null ? '' : JSON.stringify(jsonData,null, 2);

  return new Promise((resolve, reject) => {
    // 要写入的文件   要写入的内容  a追加|w写入（默认）|r（读取）  回调函数
   fs.writeFile(name, prefix + Str, {flag:"a"}, function (err) {
     if(err) {
       return reject(console.log(`写入文件${name}失败`, err));
     } else {
       //  console.log("写入成功");
       resolve(true);
     }
   });
  })
}

module.exports = writeFile;
