/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();

  for (const str of strs) {
    const key = str.split("").sort().join("");

    if (map.has(key)) {
      map.set(key, [...map.get(key), str]);
    } else {
      map.set(key, [str]);
    }
  }

  return Array.from(map.values());
};
