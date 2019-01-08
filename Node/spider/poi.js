
/**
 * 在指定范围内，按照每次移动的距离，获得所有点的列表
 * @param {Rect} range 范围
 * @param {Number} range.x1 起始点经度
 * @param {Number} range.y1 起始点纬度
 * @param {Number} range.x2 结束点经度
 * @param {Number} range.y2 结束点纬度
 * @param {Object} dis 每次移动距离信息
 * @param {Number} dis.x 经度每次移动的距离
 * @param {Number} dis.y 纬度每次移动的距离
 * @return Array 获得的所有点的列表
 */
const getPoiList = (range, dis) => {
  const result = [];

  const { x1, y1, x2, y2 } = range;
  let x = x1;
  let y = y1;
  while (x <= x2 && y >= y2) {
    result.push([+x.toFixed(6), +y.toFixed(6)]);

    // 平行往右移
    x += dis.x;

    // 如果超出了右侧边界，那就往下移一个距离，x设置成起点
    if (x > x2) {
      y += dis.y;
      x = x1;
    }
  }

  return result;
};

exports.getPoiList = getPoiList;
