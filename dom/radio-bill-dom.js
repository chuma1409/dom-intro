const radioAddBtnELem = document.querySelector(".radioBillAddBtn");
const billTypeRadioElem = document.querySelector(".billItemTypeRadio");
const callTotalElemTwo = document.querySelector(".callTotalTwo");
const smsTotalElemTwo = document.querySelector(".smsTotalTwo");
const totalCostElemTwo = document.querySelector(".totalTwo");

var radioBillInstance = RadioBill()

function radioTotalAddBtnClicked(){
  
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedRadioBtn){
     var billItemType = checkedRadioBtn.value
    
  }
    var billItem = billItemType.trim();
      if (billItem === "call"){
        radioBillInstance.eachCall()
      }
      else if (billItem === "sms"){
        radioBillInstance.eachSms()
      }
      
  
    totalAddBtnClicked()
  }

function totalAddBtnClicked(){
  callTotalElemTwo.innerHTML = radioBillInstance.tCallsTotal().toFixed(2);
  smsTotalElemTwo.innerHTML = radioBillInstance.tSmsTotal().toFixed(2);
  totalCostElemTwo.innerHTML = radioBillInstance.allTotal().toFixed(2); 
  indicators();
}
  function indicators() {
    totalCostElemTwo.classList.remove("danger");
    totalCostElemTwo.classList.remove("warning");
    totalCostElemTwo.classList.add(radioBillInstance.warningLevel());
    totalCostElemTwo.classList.add(radioBillInstance.dangerLevel());
   

  }
radioAddBtnELem.addEventListener("click", radioTotalAddBtnClicked);