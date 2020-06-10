function CalculateBill(){
  var call =0;
  var sms = 0;
  var totalBill = 0;
  
  function totalPhoneBill(billString){
  
    var billItems = billString.split(",");
    var billTotal = 0;
    
    for (var i=0;i<billItems.length;i++){
      var billItem = billItems[i].trim();
      
      if (billItem === "call"){
        billTotal += 2.75;
      }
      else if (billItem === "sms"){
        billTotal += 0.75;
      }
    }
      var roundedBillTotal = billTotal.toFixed(2);
    return roundedBillTotal;
   }
  function forEachCallAdd(){
      call +=2.75;
      totalBill += 2.75

    }

    function forEachSmsAdd(){
      sms += 0.75;
      totalBill += 0.75
    }

    function newSmsTotal(){
      return sms;
    }

    function newCallsTotal(){
      return call;
    }
    return {
      totalPhoneBill,
      forEachCallAdd,
     newCallsTotal ,
     forEachSmsAdd, 
     newSmsTotal
      
    }

}

