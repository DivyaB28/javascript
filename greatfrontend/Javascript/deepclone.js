/**
 *
 * Problem: https://www.greatfrontend.com/questions/javascript/deep-clone
 * @template T
 * @param {T} value
 * @return {T}
 */

/**
 *
 * const myDeepCopy = JSON.parse(JSON.stringify(myOriginal));
 */
export default function deepClone(value) {
  if (typeof value !== "object" || value === null) {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => deepClone(item));
  }

  return Object.fromEntries(
    Object.entries(value).map(([key, value]) => [key, deepClone(value)])
  );
}

/**
 * https://web.dev/articles/structured-clone#structured_cloning
 *
 * const myDeepCopy = structuredClone(myOriginal);
 */
