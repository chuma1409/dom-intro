
const btnAdd=document.querySelector(".add");
const btnUpd=document.querySelector(".updateSettings")

const smsCost=document.querySelector(".smsCostSetting");
const callCost=document.querySelector(".callCostSetting");
const criticalLevel=document.querySelector(".criticalLevelSetting");
const warningLevel=document.querySelector(".warningLevelSetting");
const totalCostElemThree=document.querySelector(".totalSettings");
  const callCostElem=document.querySelector(".callTotalSettings");
const smsCostElem=document.querySelector(".smsTotalSettings");
var smsCostVal=0;
var callCostVal=0;
var warnLevel=0;
var critLevel=0;
var smsCostTotal=0;
var callCostTotal=0;
var allCostTotal=0;
 function totalAdd(billItemType) {
     if (allCostTotal<=critLevel){

            if (billItemType === "call") {
        callCostTotal+=callCostVal;
              allCostTotal+=callCostVal;
            }
            else if (billItemType === "sms") {
        smsCostTotal+=smsCostVal;
                
              allCostTotal+=smsCostVal;
            }
        }
        }
function styleTotal(roundedBillTotal){ 
      const currentTotal=Number(roundedBillTotal);
    totalCostElemThree.classList.remove("danger");
    totalCostElemThree.classList.remove("warning");

 if(currentTotal>=warnLevel && currentTotal<critLevel)
    {//make orange
        totalCostElemThree.classList.remove("danger")
totalCostElemThree.classList.add("warning");
    }
    
else if(currentTotal>=critLevel){
        //make red
        totalCostElemThree.classList.remove("warning")
        totalCostElemThree.classList.add("danger")
    } 
    
}
function clicked(){

 var radioSmsCall = document.querySelector("input[name='billItemTypeWithSettings']:checked");

  var item = radioSmsCall.value;  

  totalAdd(item);    
callCostElem.innerHTML =callCostTotal.toFixed(2);
    smsCostElem.innerHTML = smsCostTotal.toFixed(2)
    totalCostElemThree.innerHTML = allCostTotal.toFixed(2);
styleTotal(allCostTotal);
  
}
btnAdd.addEventListener("click",clicked);
function update(){
  
 callCostVal=Number(callCost.value);
  smsCostVal=Number(smsCost.value);
   warnLevel=Number(warningLevel.value);
 critLevel=Number(criticalLevel.value);
    styleTotal(allCostTotal); 
}

    
btnAdd.addEventListener("click",clicked);
btnUpd.addEventListener("click",update);