/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const db = {};

  function addToDb(d) {
    if (`.${d}` in db) {
      db[`.${d}`] += 1;
    } else {
      db[`.${d}`] = 1;
    }
  }

  function extractDomain(subdomains) {
    if (subdomains.length === 0) return null;
    const subdomainsArr = subdomains.split('.');

    // add whole subdomain
    addToDb(subdomainsArr.join('.'));

    // add all subparts
    // console.log(`subdomainsArr: ${subdomainsArr}`);

    // add all variants
    return extractDomain(subdomainsArr.slice(0, subdomainsArr.length - 1).join('.'));
  }

  domains.forEach((d) => extractDomain(d.split('.').reverse().join('.')));
  return db;
}

// console.log(getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']));

module.exports = getDNSStats;
