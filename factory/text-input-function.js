function TextInputBill(){

  var billsTotal = 0;
  var callsTotal = 2.75;
  var smsTotal = 0.75;

    var calls = 0;
    var smss = 0;
    var totalAdd = 0;

function forEachCall(){
   calls += callsTotal;
   totalAdd += billsTotal;
}
function forEachSms(){
    smss += smsTotal;
    totalAdd += billsTotal;
}

function totalCallsTotal(){
    return calls;
}
function totalSmsTotal(){
    return smss;
}
function totalAllTotal(){
    return smss + calls;
}
function warningLevel(){
   if(totalAllTotal() >= 30)
    return "warning";
}
function dangerLevel(){
    if(totalAllTotal() >= 50)
    return "danger";
}
return{
    textTotalAddBtnClicked,
    forEachCall,
    forEachSms,
    totalCallsTotal,
    totalSmsTotal,
    totalAllTotal,
    warningLevel,
    dangerLevel
}
}