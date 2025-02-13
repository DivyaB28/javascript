/**
 * Implement a function that checks if an object is deep copied or shallow copied.
 */
const _ = require("lodash");
function isDeepCopied(original, copy) {
  // first check if original and copy are of same reference
  if (original === copy) {
    return false;
  }

  for (let key in original) {
    // if property in an object check if reference is same in copy
    if (typeof original[key] === "object" && original[key] !== null) {
      // if nested object references are same then its a shallow copied
      if (original[key] === copy[key]) {
        return false;
      }
    }
  }
  return true;
}

let obj1 = { a: 1, b: { c: 2 } };

let shallowCopy = { ...obj1 };

console.log(isDeepCopied(obj1, shallowCopy));

let deepCopy = JSON.parse(JSON.stringify(obj1));
console.log(isDeepCopied(obj1, deepCopy));

let deepCopy2 = structuredClone(obj1);
console.log(isDeepCopied(obj1, deepCopy2));

let deepCloneLodash = _.cloneDeep(obj1);
console.log(isDeepCopied(obj1, deepCloneLodash));
