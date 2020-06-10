

  var billsTotal =0;

  var callsTotal =0;

  var smsTotal =0;

function textTotalAddBtnClicked(){

    var billItems = billTypeTextElem.value

  var billItem = billItems.trim();

    if (billItem === "call"){

      billsTotal += 2.75;

        callsTotal += 2.75;

    }

    else if (billItem === "sms"){

      billsTotal += 0.75

        smsTotal += 0.75;

    }
    colorAddBtnClicked()
}
var textInputBill = function(){
    var calls = 0;
    var smss = 0;
    var totalAdd = 0;

function forEachCall(){
    calls += 2.75;
    totalAdd += 2.75;
}
function forEachSms(){
    smss += 0.75;
    totalAdd += 0.75;
}

function totalCallsTotal(){
    return calls;
}
function totalSmsTotal(){
    return smss;
}
function warningLevel(){
    return "warning";
}
function dangerLevel(){
    return "danger";
}
return{
    textTotalAddBtnClicked,
    forEachCall,
    forEachSms,
    totalCallsTotal,
    totalSmsTotal,
    warningLevel,
    dangerLevel
}
}