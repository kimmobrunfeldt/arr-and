# Array AND

[![Build Status](https://travis-ci.org/kimmobrunfeldt/arr-and.svg?branch=master)](https://travis-ci.org/kimmobrunfeldt/arr-and)

Generic array and function which supports equals predicate function.

## Install

```
npm install arr-and
```

## Usage

```js
var and = require('arr-and');

and([1, 2], [2, 3]);
//=> [2]

and([1, 2, 3], [2, 3, 4], [3, 4, 5]);
//=> [3]

and([{id: 1}, {id: 2}], [{id: 2}, {id: 3}], function equals(a, b) {
    return a.id === b.id;
});
//=> [{id: 2}]
```

## API

### and(...arrays, [equalsPredicate])

Creates an array of unique values that is the [logical conjuction](https://en.wikipedia.org/wiki/Logical_conjunction) of the provided arrays.

#### ...arrays

*Required*  
Type: `array`

Two or more arrays to do AND operation.

#### equalsPredicate

Type: `function`  
Default: `function(a, b) { return a === b; }`

Equality function. Should return true if `a` and `b` items are equal.


## License

MIT
