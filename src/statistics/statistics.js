const zeros = require("../array/array").zeros;
/**
 * @name variance
 * @description
 * Calculate the variance between the points inside `data`
 * - returns just the variance value if `data` is an array of values
 * - returns an array of variances if `data` is an array of arrays
 * @param {Array} data input for the variance
 */
function variance(data) {
  let avg = average(data);
  let variance;
  let N = data.length;
  if (avg.length !== undefined) {
    let M = avg.length;
    variance = zeros(M);
    for (let i = 0; i < M; i++) {
      for (let j = 0; j < N; j++) {
        variance[i] += Math.pow(data[j][i] - avg[i], 2);
      }
      variance[i] = Math.sqrt(variance[i] / N);
    }
  } else {
    variance = 0;
    for (let i = 0; i < N; i++) {
      variance += Math.pow(data[i] - avg, 2);
    }
    variance = Math.sqrt(variance / N);
  }
  return variance;
}

/**
 * @name average
 * @description
 * Calculate the average between the points inside `data`
 * - returns just the average value if `data` is an array of values
 * - returns an array of averages if `data` is an array of arrays
 * @param {Array} data input for the average
 */
function average(data) {
  let avg;
  let N = data.length;
  let M = data[0].length;
  if (M !== undefined) {
    avg = zeros(M);
    for (let i = 0; i < M; i++) {
      for (let j = 0; j < N; j++) {
        avg[i] += data[j][i];
      }
      avg[i] /= N;
    }
  } else {
    //just the classic average
    avg = 0;
    for (let i = 0; i < N; i++) avg += data[i];
    avg /= N;
  }
  return avg;
}

module.exports = {
  average: average,
  variance: variance
};
