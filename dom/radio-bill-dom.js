const radioAddBtnELem = document.querySelector(".radioBillAddBtn");
const billTypeRadioElem = document.querySelector(".billItemTypeRadio");
const callTotalElemTwo = document.querySelector(".callTotalTwo");
const smsTotalElemTwo = document.querySelector(".smsTotalTwo");
const totalCostElemTwo = document.querySelector(".totalTwo");




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