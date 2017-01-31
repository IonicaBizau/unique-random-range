"use strict";

/**
 * uniqueRandomRange
 * Generate unique random numbers, for a given range.
 *
 * @name uniqueRandomRange
 * @function
 * @param {Number} a Param descrpition.
 * @param {Number} b Param descrpition.
 * @return {Number} Return description.
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
