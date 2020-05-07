const textTotalAddBtnELem = document.querySelector(".radioBillAddBtn");
const billTypeTextElem = document.querySelector(".billItemTypeRadio");
const callTotalElemTwo = document.querySelector(".callTotalTwo");
const smsTotalElemTwo = document.querySelector(".smsTotalTwo");
const totalCostElemTwo = document.querySelector(".totalTwo");

  var billTotal =0;
  var callsTotal =0;
  var smsTotal =0;

function textTotalAddBtnClicked(){
 // alert("chuma")
var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
   var billItemType = checkedRadioBtn.value
   // billItemType will be 'call' or 'sms'
}
    // get the value entered in the billType textfield
   
    // update the correct total
  var billItem = billItemType.trim();
    if (billItem === "call"){
      billTotal += 2.75;
        callsTotal += 2.75;
    }
    else if (billItem === "sms"){
      billTotal += 0.75
        smsTotal += 0.75;
    }
    //update the totals that is displayed on the sc.

  totalAddBtnClicked()
}
// alert(billTotal)

function totalAddBtnClicked(){
  callTotalElemTwo.innerHTML = callsTotal.toFixed(2);
  smsTotalElemTwo.innerHTML = smsTotal.toFixed(2);
  totalCostElemTwo.innerHTML = billTotal.toFixed(2); 
  
      if (billTotal >= 50){
       // adding the danger class will make the text red
       totalCostElemTwo.classList.add("danger");
   }
   else if (billTotal >= 30){
    totalCostElemTwo.classList.add("warning");
   }
}
textTotalAddBtnELem.addEventListener("click", textTotalAddBtnClicked);