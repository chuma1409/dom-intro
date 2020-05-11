const radioAddBtnELem = document.querySelector(".radioBillAddBtn");
const billTypeRadioElem = document.querySelector(".billItemTypeRadio");
const callTotalElemTwo = document.querySelector(".callTotalTwo");
const smsTotalElemTwo = document.querySelector(".smsTotalTwo");
const totalCostElemTwo = document.querySelector(".totalTwo");

  var billTotalCost =0;
  var callsTotalCost =0;
  var smsTotalCost =0;

function radioTotalAddBtnClicked(){
  
var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
   var billItemType = checkedRadioBtn.value
   // billItemType will be 'call' or 'sms'
}
    // get the value entered in the billType textfield
   
    // update the correct total
  var billItem = billItemType.trim();
    if (billItem === "call"){
      billTotalCost += 2.75;
        callsTotalCost += 2.75;
    }
    else if (billItem === "sms"){
      billTotalCost += 0.75
        smsTotalCost += 0.75;
    }
    //update the totals that is displayed on the sc.

  totalAddBtnClicked()
}
// alert(billTotal)

function totalAddBtnClicked(){
  callTotalElemTwo.innerHTML = callsTotalCost.toFixed(2);
  smsTotalElemTwo.innerHTML = smsTotalCost.toFixed(2);
  totalCostElemTwo.innerHTML = billTotalCost.toFixed(2); 
  
      if (billTotalCost >= 50){
       // adding the danger class will make the text red
       totalCostElemTwo.classList.add("danger");
   }
   else if (billTotalCost >= 30){
    totalCostElemTwo.classList.add("warning");
   }
}
radioAddBtnELem.addEventListener("click", radioTotalAddBtnClicked);