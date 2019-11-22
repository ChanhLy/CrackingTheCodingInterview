var assert = require('assert');

const isUnique = require('../../src/1.arrays-strings/is-unique')

describe('1.1 Is Unique', function () {
  describe('#isUnique(s)', function () {

    it('should return false when a string has a duplicate character', function () {
      assert.equal(isUnique("coffee"), false);
      assert.equal(isUnique("aa"), false);
      assert.equal(isUnique("aba"), false);
      assert.equal(isUnique("abca"), false);
    });
    it('should return true when a string has all unique characters', function () {
      assert.equal(isUnique("a"), true);
      assert.equal(isUnique("abc"), true);
      assert.equal(isUnique("adbg"), true);
    });
  });
});