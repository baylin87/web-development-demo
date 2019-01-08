
const fs=require('fs');
const path=require('path');

function read(name = 'result.json'){
  // const dir=path.resolve(`./output/${name}`);
  const dir = name;
    return new Promise((resolve,reject)=>{
      fs.readFile(dir,'utf-8',(err,data)=>{
        if(err){
          reject(console.log(`读取文件${dir}失败！`, err));
        }else{  
          const parseData = JSON.parse(data);
          resolve(parseData);
        }
      })
    })
}

module.exports = read;