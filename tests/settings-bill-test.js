describe("the bill with settings of factory function", function(){
    it("should be able to set the call cost", function(){
        let settingsBill = billWithSettings();
        settingsBill.setCallCost(1.70);
        assert.equal(1.70, settingsBill.getCallCost());

        let settingsBill2 = billWithSettings();
        settingsBill2.setCallCost(2.50);
        assert.equal(2.50, settingsBill2.getCallCost());
    })

    it("should be able to set the sms cost", function(){
        let settingsBill = billWithSettings();
        settingsBill.setSmsCost(0.50);
        assert.equal(0.50, settingsBill.getSmsCost());

        let settingsBill2 = billWithSettings();
        settingsBill2.setSmsCost(1.50);
        assert.equal(1.50, settingsBill2.getSmsCost());
    })

    it("should be able to set the sms and call cost", function(){
        let settingsBill = billWithSettings();
        settingsBill.setSmsCost(0.50);
        settingsBill.setCallCost(1.70);
        assert.equal(0.50, settingsBill.getSmsCost());
        assert.equal(1.70, settingsBill.getCallCost());

        let settingsBill2 = billWithSettings();
        settingsBill2.setCallCost(2.50);
        settingsBill2.setSmsCost(1.50);
        assert.equal(2.50, settingsBill2.getCallCost());
        assert.equal(1.50, settingsBill2.getSmsCost());
    })

    
    it("should be able to set the warning level", function(){
        let settingsBill = billWithSettings();
        settingsBill.setWarningLevel(20);
        assert.equal(20, settingsBill.getWarningLevel());
    })

    it("should be able to set the critical level", function(){
        let settingsBill = billWithSettings();
        settingsBill.setCriticalLevel(30);
        assert.equal(30, settingsBill.getCriticalLevel());
    })


    it("should be able to set the warning and critical level", function(){
        let settingsBill = billWithSettings();
        settingsBill.setWarningLevel(10);
        settingsBill.setCriticalLevel(15);
        assert.equal(10, settingsBill.getWarningLevel());
        assert.equal(15, settingsBill.getCriticalLevel());
    })
    it("should be able to use the set sms and call cost", function(){
        let settingsBill = billWithSettings();
        settingsBill.setSmsCost(0.50);
        settingsBill.setCallCost(1.70);

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeSms();

        assert.equal(0.50, settingsBill.getTotalSmsCost());
        assert.equal(1.70, settingsBill.getTotalCallCost());
        assert.equal(1.70, settingsBill.getTotalCallCost());
      
    })
    
})