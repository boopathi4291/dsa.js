const assert = require('assert');

/**
 * Brute force approach to find solutions for
 * this multi-variable equation:
 *   3x + 9y + 8z = 79
 *
 * @param {Number} start where to start searching for solution
 * @param {Number} end last value to try (exclusive)
 * @returns {Array} array of objects with solutions e.g. [{x:1, y:1, z:1}]
 * @example
 *    findXYZ({ start: -5, end: 5 }) => []
 *    findXYZ({ end: 6 }) => [{ x: 1, y: 4, z: 5 }, { x: 4, y: 3, z: 5 }]
 */
function findXYZ({ start = 0, end = 10 } = {}) {
  const solutions = [];
  for (let x = start; x < end; x++) {
    for (let y = start; y < end; y++) {
      for (let z = start; z < end; z++) {
        if (3 * x + 9 * y + 8 * z === 79) {
          solutions.push({ x, y, z });
        }
      }
    }
  }
  return solutions;
}

assert.equal(findXYZ().length, 9);
assert.deepStrictEqual(findXYZ({ start: -5, end: 5 }), []);
assert.deepStrictEqual(findXYZ({ end: 6 }), [{ x: 1, y: 4, z: 5 }, { x: 4, y: 3, z: 5 }]);
assert.deepStrictEqual(findXYZ({ start: -2, end: 6 }), [
  { x: -2, y: 5, z: 5 },
  { x: 1, y: 4, z: 5 },
  { x: 4, y: 3, z: 5 },
]);

module.exports = findXYZ;
