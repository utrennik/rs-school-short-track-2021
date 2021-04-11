/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let lastSym;
  let repeats = 1;
  const result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === lastSym) {
      repeats++;
      if (i === str.length - 1) {
        result.push(repeats);
        result.push(lastSym);
      }
    } else {
      if (repeats > 1) {
        result.push(repeats);
        repeats = 1;
      }
      if (lastSym) result.push(lastSym);
      if (i === str.length - 1) {
        result.push(str[i]);
      }
      lastSym = str[i];
    }
  }

  return result.join('');
}

module.exports = encodeLine;
