var assert = require('assert');
var and = require('../src/index');

describe('arr-and', function() {
    it('basic and', function() {
        assert.deepStrictEqual(and([1, 2], [2, 3]), [2]);
    });

    it('multiple arrays', function() {
        var result = and([1, 2, 3], [2, 3, 4], [3, 4, 5]);
        assert.deepStrictEqual(result, [3]);
    });

    it('predicate', function() {
        var result = and([{id: 1}, {id: 2}], [{id: 2}, {id: 3}], function equals(a, b) {
            return a.id === b.id;
        });
        assert.deepStrictEqual(result, [{id: 2}]);
    });
});
