/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const opening = ["(", "{", "["];

  const closingToOpeningMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stack = [];

  for (const c of s) {
    if (opening.includes(c)) {
      stack.push(c);
    } else if (closingToOpeningMap[c]) {
      if (stack.pop() !== closingToOpeningMap[c]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
