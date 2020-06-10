const calculateBtn = document.querySelector(".calculateBtn");
const billTotalElement = document.querySelector(".billTotal");
const billStringField = document.querySelector(".billString");
const billTotalSpanElement = document.querySelector(".total");

var calculateBill = CalculateBill();

  function calculateBillFunction(){
    var billString = billStringField.value;
    var currentTotal = calculateBill.totalPhoneBill (billString);
   
    
       billTotalSpanElement.classList.remove("danger");
       billTotalSpanElement.classList.remove("warning");
    
    if (currentTotal >= 30){
      billTotalSpanElement.classList.add("danger");
      
    }
    else if (currentTotal >= 20 && currentTotal < 30 ){
    
    billTotalSpanElement.classList.add("warning");
    }
   
    billTotalElement.innerHTML = currentTotal;
  
  }

calculateBtn.addEventListener("click", calculateBillFunction);