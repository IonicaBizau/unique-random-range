"use strict";

/**
 * uniqueRandomRange
 * Generate unique random numbers, for a given range.
 *
 * @name uniqueRandomRange
 * @function
 * @param {Number} min The lowest number.
 * @param {Number} max The highest number.
 * @returns {Function} A function retruning integers between `min` and `max`
 * (including `min` and `max`). It has a `reset` method which will clear
 * the cache.
 */
module.exports = function uniqueRandomRange (min, max) {
    const RANGE = [];
    for (let i = min; i <= max; ++i) {
        RANGE.push(i);
    }
    let _ = [];
    let rand = () => {
        if (!_.length) {
            rand.reset();
        }
        let index = Math.floor(Math.random() * _.length);
        let r = _[index];
        _.splice(index, 1)
        return r;
    };
    rand.reset = () => {
        _ = RANGE.concat([]);
    };
    return rand;
};
