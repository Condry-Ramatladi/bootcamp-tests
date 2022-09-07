
describe('Word Game function test function test', function () {
    it("It should return 'shipyard' when called with 'The dog jumped over the shipyard fence'", function () {
        assert.equal('shipyard', longestWord('The dog jumped over the shipyard fence'));
    });

    it("It should return 'the' when called with 'The dog jumped over the shipyard fence'", function () {
        assert.equal('the', shortestWord('The dog jumped over the shipyard fence'));
    });

    it("It should return '32' when called with 'The dog jumped over the shipyard fence'", function () {
        assert.equal('32', wordLengths('The dog jumped over the shipyard fence'));
    });

});