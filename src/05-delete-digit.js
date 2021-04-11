/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const s = `${n}`;
  for (let i = 0; i < s.length; i++) {
    if (i + 1 === s.length) return +(s.slice(0, s.length - 1));
    if (+s[i + 1] > +s[i]) return +(s.slice(0, i) + s.slice(i + 1));
  }
  return +s;
}

module.exports = deleteDigit;
