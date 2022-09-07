describe('Greet function test' , function(){
    it("It should return 'Hello, Bob' when called with 'Bob'" , function(){
        assert.equal('Hello, Bob',greet('Bob'));
    });

    it("It should return 'Hello, Sam' when called with 'Sam'" , function(){
        assert.equal('Hello, Sam',greet('Sam'));
    });

});