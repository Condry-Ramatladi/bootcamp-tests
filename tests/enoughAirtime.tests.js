describe('Enough Air Time? function test' , function(){
    it("It should return 'R16.98' when called with ('call,call,call,data,sms,sms,call,data', 50)" , function(){
        assert.equal('R16.98', enoughAirtime('call,call,call,data,sms,sms,call,data', 50));
    });

    it("It should return 'R0.00' when called with ('data,sms,data,sms', 20)" , function(){
        assert.equal('R0.00', enoughAirtime('data,sms,data,sms', 20));
    });

    it("It should return 'R0.00' when called with ('data,data,data', 36)" , function(){
        assert.equal('R0.00', enoughAirtime('data,data,data', 36));
    });

});