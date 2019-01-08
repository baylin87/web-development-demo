/**
 * 对数组按照promise进行迭代
 * @param {Array} array 要循环的数组
 * @param {Function} iterator 迭代器。调用时会传入这几个参数：result、当前的数组项，数字下标，整个数组
 * @param {*} initData 初始对象
 * @return {Promise} 保证整个迭代过程的Promise对象，resolve的参数是执行完所有迭代返回的结果
 */
function reduce(array, iterator, initData = {}) {
  if (array.length === 0) return Promise.resolve(initData);

  return new Promise((resolve, reject) => {
    let i = -1;

    function next(result) {
      i += 1;

      if (i === array.length) {
        resolve(result);
        return;
      }

      const createrResult = iterator(result, array[i], i, array);
      const promise = createrResult instanceof Promise ? createrResult : Promise.resolve(createrResult);
      promise.then(next).catch(error => {
        reject({
          item: array[i],
          index: i,
          error,
        });
      });
    }

    next(initData);
  });
}

module.exports = reduce;
