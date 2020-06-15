const btnAdd = document.querySelector(".add");
const btnUpd = document.querySelector(".updateSettings")

const smsCost = document.querySelector(".smsCostSetting");
const callCost = document.querySelector(".callCostSetting");
const criticalLevel = document.querySelector(".criticalLevelSetting");
const warningLevel = document.querySelector(".warningLevelSetting");
const totalCostElemThree = document.querySelector(".totalSettings");
const callCostElem = document.querySelector(".callTotalSettings");
const smsCostElem = document.querySelector(".smsTotalSettings");

var settingsInstance = BillWithSettings()


function update() {
  settingsInstance.setCallCost(Number(callCost.value))
  settingsInstance.setSmsCost(Number(smsCost.value))
  settingsInstance.setWarningLevel(Number(warningLevel.value))
  settingsInstance.setCriticalLevel(Number(criticalLevel.value))
  styleTotal();
}


function clicked() {

  var radioSmsCall = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (radioSmsCall) {
    var item = radioSmsCall.value;
    if (item === "call") {
      settingsInstance.makeCall()
    }
    if (item = "sms") {
      settingsInstance.makeSms()
    }
  }

  callCostElem.innerHTML = settingsInstance.getTotalCallCost().toFixed(2);
  smsCostElem.innerHTML = settingsInstance.getTotalSmsCost().toFixed(2)
  totalCostElemThree.innerHTML = settingsInstance.getTotalCost().toFixed(2);
  styleTotal();

}

function styleTotal() {

  totalCostElemThree.classList.remove("danger");
  totalCostElemThree.classList.remove("warning");
  totalCostElemThree.classList.add(settingsInstance.colorCode());
}

btnAdd.addEventListener("click", clicked);
btnUpd.addEventListener("click", update);