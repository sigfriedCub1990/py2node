let R = require("ramda");

let allArray = (args) => {
  if (R.all(Array.isArray)(args)) {
    return args;
  } else {
    throw new Error(`
        One of the inputs is not an Array, here are the inputs you gave:
        ${JSON.stringify(args)}
    `);
  }
};

let sameLength = (l) => R.propEq("length", l);

let allArraysAndSameLength = (...args) => {
  let lengthOrInfinity = R.propOr(Infinity, "length");
  let expectedLength = sameLength(lengthOrInfinity(args[0]));
  let haveSameLength = R.all(expectedLength);

  return R.compose(haveSameLength, allArray)(args);
};

module.exports = allArraysAndSameLength;
