const textTotalAddBtnElem = document.querySelector(".addToBillBtn");

const billTypeTextElem = document.querySelector(".billTypeText");

const callTotalElem = document.querySelector(".callTotalOne");

const smsTotalElem = document.querySelector(".smsTotalOne");

const totalCost = document.querySelector(".totalOne");

var textBillInstance = TextInputBill()

function textTotalAddBtnClicked() {

  var billItems = billTypeTextElem.value

  var billItem = billItems.trim();

  if (billItem === "call") {
    textBillInstance.forEachCall()
  }

  else if (billItem === "sms") {
    textBillInstance.forEachSms()
  }
  colorAddBtnClicked()
}

function colorAddBtnClicked() {

  callTotalElem.innerHTML = textBillInstance.totalCallsTotal().toFixed(2);
  smsTotalElem.innerHTML = textBillInstance.totalSmsTotal().toFixed(2);
  totalCost.innerHTML = textBillInstance.totalAllTotal().toFixed(2);

  totalCost.classList.remove("danger");
  totalCost.classList.remove("warning");

  totalCost.classList.add(textBillInstance.dangerLevel("danger"));
  totalCost.classList.add(textBillInstance.warningLevel("warning"));


}

textTotalAddBtnElem.addEventListener("click", textTotalAddBtnClicked);