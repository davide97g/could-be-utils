/**
 * Map utilities functions
 */

/**
 * @name arrayToMap
 * @description
 * Converts a matrix into a DAG graph as a map
 * @param {Array} array matrix with values for DAG convertion
 * @returns {Object} map
 */
function arrayToMap(array) {
  let map = {};
  let key, down, right;
  let neighbors;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      key = "" + i + j;
      neighbors = {};
      if (i !== array.length - 1) {
        // can go down
        down = "" + (i + 1) + j;
        neighbors[down] = array[i + 1][j];
      }
      if (j !== array[i].length - 1) {
        //can go right
        right = "" + i + (j + 1);
        neighbors[right] = array[i][j + 1];
      }
      map[key] = neighbors;
    }
  }
  return map;
}

/**
 * @name mapToArray
 * @description
 * Converts a Direct Acyclic Graph (DAG) into an array
 * @param {Object} map DAG to be converted
 * @returns {Array} array
 */
function mapToArray(map) {
  let array = [];
  return array;
}

function numberToLetter(number) {
  switch (number) {
    case 0:
      return "a";
    case 1:
      return "b";
    case 2:
      return "c";
    case 3:
      return "d";
    case 4:
      return "e";
    case 5:
      return "f";
    case 6:
      return "g";
    case 7:
      return "h";
    case 8:
      return "i";
    case 9:
      return "l";
  }
}

function convertToString(number) {
  let s = number.toString();
  let res = "";
  for (let i = 0; i < s.length; i++) res += numberToLetter(parseInt(s[i]));
  return res;
}

module.exports = {
  arrayToMap: arrayToMap,
  mapToArray: mapToArray,
  numberToLetter: numberToLetter,
  convertToString: convertToString
};
