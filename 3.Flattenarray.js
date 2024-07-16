function flatten(ary) {
    var ret = [];
    for(var i = 0; i < ary.length; i++) {
        if(Array.isArray(ary[i])) {
            ret = ret.concat(flatten(ary[i]));
        } else {
            ret.push(ary[i]);
        }
    }
    return ret;
}

console.log(flatten([[[[[0]], [1]], [[[[2], [3]]], [[4], [5]]]]]) )// [0, 1, 2, 3, 4, 5]

// Alternatively according to
const nested = [[[0], [1]], [[[2], [3]], [[4], [5]]]];
const flattened = nested.flat(Infinity);  // Need to specify depth if > 1
console.log(flattened);