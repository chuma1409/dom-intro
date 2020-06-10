describe("Calculate-bill testing" ,function(){
    it("should charge R2.75 for each new call", function(){
       const calculateBill = CalculateBill();
       calculateBill.forEachCallAdd();
       assert.equal(2.75, calculateBill.newCallsTotal() )
    });
    it("should charge R0.75 for each new sms", function(){
        var calculateBill = CalculateBill();
        calculateBill.forEachSmsAdd();
        assert.equal(0.75, calculateBill.newSmsTotal() )
    });
it("should update totalBill to R8.50 when 2 calls and 4 sms are made", function(){
    var calculateBill = CalculateBill();
    calculateBill.forEachCallAdd();
    calculateBill.forEachCallAdd();
    calculateBill.forEachSmsAdd();
    calculateBill.forEachSmsAdd();
    calculateBill.forEachSmsAdd();
    calculateBill.forEachSmsAdd();
    assert.equal(5.50, calculateBill.newCallsTotal() )
    assert.equal(3.00, calculateBill.newSmsTotal() )
});
});