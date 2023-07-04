/*
 * @param {Set} set
 * @param {Array} array
 */
export default function hasValuesFromArray(set, array) {
  for (let counter = 0; counter < array.length; counter++) {
    if (!set.has(array[counter])) {
      return false;
    }
  }
  return true;
}
