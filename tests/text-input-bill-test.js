describe("Text-input-bill testing" ,function(){
    it("should charge R2.75 for each new call", function(){
        var textBillFunction = textInputBill();
        textBillFunction.forEachCall();
        assert.equal(2.75, textBillFunction.totalCallsTotal() )
     });
     it("should charge R0.75 for each new sms", function(){
        var textBillFunction = textInputBill();
        textBillFunction.forEachSms();
        assert.equal(0.75, textBillFunction.totalSmsTotal() )
    });
    it("should charge R13.75 for 5 calls made", function(){
        var textBillFunction = textInputBill();
        textBillFunction.forEachCall();
        textBillFunction.forEachCall();
        textBillFunction.forEachCall();
        textBillFunction.forEachCall();
        textBillFunction.forEachCall();
        assert.equal(13.75, textBillFunction.totalCallsTotal() )
    });
    it("should charge R3.75 for 5 sms made", function(){
        var textBillFunction = textInputBill();
        textBillFunction.forEachSms();
        textBillFunction.forEachSms();
        textBillFunction.forEachSms();
        textBillFunction.forEachSms();
        textBillFunction.forEachSms();
        assert.equal(3.75, textBillFunction.totalSmsTotal() )
    });
    it("should be warning when R30 is reached", function(){
        var textBillFunction = textInputBill();
        assert.equal("warning", textBillFunction.warningLevel() )
    });
    it("should be danger when R50 is reached", function(){
        var textBillFunction = textInputBill();
        assert.equal("danger", textBillFunction.dangerLevel() )
    });
});