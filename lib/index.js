"use strict";

/**
 * uniqueRandomRange
 * Generate unique random numbers, for a given range.
 *
 * @name uniqueRandomRange
 * @function
 * @param {Number} min The lowest number.
 * @param {Number} max The highest number.
 * @returns {Function} A function returning integers between `min` and `max`
 * (including `min` and `max`). It has a `reset` method which will clear
 * the cache.
 */
module.exports = function uniqueRandomRange(min, max) {
    // Improvement 1: Use `Array.from` to create the range efficiently
    const RANGE = Array.from({ length: max - min + 1 }, (_, index) => min + index);
    // Improvement 2: Use destructuring instead of `_` for better readability
    let [, ..._] = RANGE;

    let rand = () => {
        if (!_.length) {
            // Improvement 3: Use `rand.reset()` to reset the range
            rand.reset();
        }
        let index = Math.floor(Math.random() * _.length);
        let r = _[index];
        _.splice(index, 1);
        return r;
    };

    rand.reset = () => {
        // Improvement 3: Use destructuring to reset the range
        [, ..._] = RANGE;
    };

    return rand;
};
