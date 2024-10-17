/**
 * @param {Array} array
 * @return {Array}
 */
export default function uniqueArray(array) {
  let set = new Set();

  for (let i = 0; i < array.length; i++) {
    if (!set.has(array[i])) {
      set.add(array[i]);
    }
  }
  return Array.from(set);
}
