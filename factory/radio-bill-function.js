function RadioBill() {
  var billTotalCost =0;
  var callsTotalCost =2.75;
  var smsTotalCost =0.75;


    var tCalls = 0;
    var tSms = 0;
    var tAdd = 0;
function eachCall(){
    tCalls += callsTotalCost;
    tAdd += billTotalCost;
}
function eachSms(){
    tSms += smsTotalCost;
    tAdd += billTotalCost;
}
function tCallsTotal(){
    return tCalls;
}
function tSmsTotal(){
    return tSms;
}
function allTotal(){
  return tSms + tCalls;
}

function warningLevel(){
  if(allTotal() >= 30)  
  return "warning";
}
function dangerLevel(){
  if(allTotal() >= 50)
    return "danger";
}

return{
    radioTotalAddBtnClicked,
    eachCall,
    eachSms,
    tCallsTotal,
    tSmsTotal,
    allTotal,
    warningLevel,
    dangerLevel
}
}