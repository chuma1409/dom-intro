  var billTotalCost =0;
  var callsTotalCost =0;
  var smsTotalCost =0;

function radioTotalAddBtnClicked(){
  
var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
   var billItemType = checkedRadioBtn.value
  
}
  var billItem = billItemType.trim();
    if (billItem === "call"){
      billTotalCost += 2.75;
        callsTotalCost += 2.75;
    }
    else if (billItem === "sms"){
      billTotalCost += 0.75
        smsTotalCost += 0.75;
    }
    

  totalAddBtnClicked()
}
var radioBill = function(){
    var tCalls = 0;
    var tSms = 0;
    var tAdd = 0;
function eachCall(){
    tCalls += 2.75;
    tAdd += 2.75;
}
function eachSms(){
    tSms += 0.75;
    tAdd += 0.75;
}
function tCallsTotal(){
    return tCalls;
}
function tSmsTotal(){
    return tSms;
}
function warningLevel(){
    return "warning";
}
function dangerLevel(){
    return "danger";
}
return{
    radioTotalAddBtnClicked,
    eachCall,
    eachSms,
    tCallsTotal,
    tSmsTotal,
    warningLevel,
    dangerLevel
}
}