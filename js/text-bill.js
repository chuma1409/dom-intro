const textTotalAddBtnElem = document.querySelector(".addToBillBtn");

const billTypeTextElem = document.querySelector(".billTypeText");

const callTotalElem = document.querySelector(".callTotalOne");

const smsTotalElem = document.querySelector(".smsTotalOne");

const totalCost = document.querySelector(".totalOne");





  var billsTotal =0;

  var callsTotal =0;

  var smsTotal =0;



function textTotalAddBtnClicked(){



    // get the value entered in the billType textfield

    var billItems = billTypeTextElem.value

    // update the correct total

  var billItem = billItems.trim();

    if (billItem === "call"){

      billsTotal += 2.75;

        callsTotal += 2.75;

    }

    else if (billItem === "sms"){

      billsTotal += 0.75

        smsTotal += 0.75;

    }

    //update the totals that is displayed on the sc.



  colorAddBtnClicked()
  callTotalElem.innerHTML = callsTotal.toFixed(2);

  smsTotalElem.innerHTML = smsTotal.toFixed(2);

  totalCost.innerHTML = billsTotal.toFixed(2); 



}

// alert(billTotal)



function colorAddBtnClicked(){

   
      if (billsTotal >= 50){

       // adding the danger class will make the text red

       totalCost.classList.add("danger");

   }

   else if (billsTotal >= 30){

       totalCost.classList.add("warning");

   }

}

textTotalAddBtnElem.addEventListener("click", textTotalAddBtnClicked);