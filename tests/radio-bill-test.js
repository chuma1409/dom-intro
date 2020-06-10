describe("Radio-bill testing" ,function(){
    it("should charge R2.75 for each new call", function(){
        var radioBillFunction = radioBill();
        radioBillFunction.eachCall();
        assert.equal(2.75, radioBillFunction.tCallsTotal() )
     });
     it("should charge R0.75 for each new sms", function(){
        var radioBillFunction = radioBill();
        radioBillFunction.eachSms();
        assert.equal(0.75, radioBillFunction.tSmsTotal() )
    });
    it("should charge R13.75 for 5 calls made", function(){
        var radioBillFunction = radioBill();
        radioBillFunction.eachCall();
        radioBillFunction.eachCall();
        radioBillFunction.eachCall();
        radioBillFunction.eachCall();
        radioBillFunction.eachCall();
        assert.equal(13.75, radioBillFunction.tCallsTotal() )
    });
    it("should charge R3.75 for 5 sms made", function(){
        var radioBillFunction = radioBill();
        radioBillFunction.eachSms();
        radioBillFunction.eachSms();
        radioBillFunction.eachSms();
        radioBillFunction.eachSms();
        radioBillFunction.eachSms();
        assert.equal(3.75, radioBillFunction.tSmsTotal() )
    });
    it("should be warning when R30 is reached", function(){
        var radioBillFunction = radioBill();
        assert.equal("warning", radioBillFunction.warningLevel() )
    });
    it("should be danger when R50 is reached", function(){
        var radioBillFunction = radioBill();
        assert.equal("danger", radioBillFunction.dangerLevel() )
    });
});