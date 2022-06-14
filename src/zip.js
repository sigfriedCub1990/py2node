const validation = require("./utils");

/*
 * zip allows you to iterate over several collections
 * in parallel.
 *
 * @params {Array<Array<T>} args - Collections to iterate over
 */
function* zip(...args) {
  if (validation(...args)) {
    for (let idx = 0; idx < args[0].length; idx++) {
      yield args.map((collection) => collection[idx]);
    }
  } else {
    throw new Error(`
        I can't process Arrays of different lengths
    `);
  }
}

module.exports = zip;
