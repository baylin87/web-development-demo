const { getPoiList } = require('./poi');


const main = () => {
  const range = {
    x1: 115.555941,
    y1: 40.114642,
    x2: 116.965072,
    y2: 39.845724,
  };
  const dis = {
    x: 0.03,
    y: -0.03,
  };

  const pois = getPoiList(range, dis);

  console.log(`共获得 ${pois.length} 个经纬度，分别为`);
  console.log(pois);
};

main();
