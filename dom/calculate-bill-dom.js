const calculateBtn = document.querySelector(".calculateBtn");
const billTotalElement = document.querySelector(".billTotal");
const billStringField = document.querySelector(".billString");
const billTotalSpanElement = document.querySelector(".total");


  function calculateBillFunction(){
    var billString = billStringField.value;
    var currentTotal = totalPhoneBill(billString);
   
    
       billTotalSpanElement.classList.remove("danger");
       billTotalSpanElement.classList.remove("warning");
    
    if (currentTotal >= 30){
      billTotalSpanElement.classList.add("danger");
      
    }
    else if (currentTotal >= 20 && currentTotal < 30 ){
    
    billTotalSpanElement.classList.add("warning");
    }
   
    billTotalElement.innerHTML = currentTotal.toFixed(2);
  
  }

calculateBtn.addEventListener("click", calculateBillFunction);