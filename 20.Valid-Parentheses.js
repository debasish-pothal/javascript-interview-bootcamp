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
    } else {
      const stackTop = stack[stack.length - 1];
      const matchingTop = closingToOpeningMap[c];

      if (stackTop === matchingTop) {
        stack.pop();
      } else {
        stack.push(c);
      }
    }
  }

  return stack.length === 0;
};
