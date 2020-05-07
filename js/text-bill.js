const textTotalAddBtn = document.querySelector(".addToBillBtn");

const billTypeText = document.querySelector(".billTypeText");

const callTotalElem = document.querySelector(".callTotalOne");

const smsTotalElem = document.querySelector(".smsTotalOne");

const totalCost = document.querySelector(".totalOne");





    var billTotal =0;

  var callsTotal =0;

  var smsTotal =0;



function textTotalAddBtnClicked(){



    // get the value entered in the billType textfield

    var billItems = billTypeText.value

    // update the correct total

  var billItem = billItems.trim();

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

      callTotalElem.innerHTML = callsTotal.toFixed(2);

      smsTotalElem.innerHTML = smsTotal.toFixed(2);

      totalCost.innerHTML = billTotal.toFixed(2); 

  

      if (billTotal >= 50){

       // adding the danger class will make the text red

       totalCost.classList.add("danger");

   }

   else if (billTotal >= 30){

       totalCost.classList.add("warning");

   }

}

textTotalAddBtn.addEventListener("click", textTotalAddBtnClicked);