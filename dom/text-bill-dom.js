const textTotalAddBtnElem = document.querySelector(".addToBillBtn");

const billTypeTextElem = document.querySelector(".billTypeText");

const callTotalElem = document.querySelector(".callTotalOne");

const smsTotalElem = document.querySelector(".smsTotalOne");

const totalCost = document.querySelector(".totalOne");



function colorAddBtnClicked(){

  callTotalElem.innerHTML = callsTotal.toFixed(2);
  smsTotalElem.innerHTML = smsTotal.toFixed(2);
  totalCost.innerHTML = billsTotal.toFixed(2); 

      if (billsTotal >= 50){
       totalCost.classList.add("danger");
   }
   else if (billsTotal >= 30){
       totalCost.classList.add("warning");
   }

}

textTotalAddBtnElem.addEventListener("click", textTotalAddBtnClicked);