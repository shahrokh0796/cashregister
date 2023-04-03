const CID = [
    ["PENNY", 1], ["NICKEL", 5], ["DIME", 10], 
    ["QUARTER", 25], ["ONE", 100], ["FIVE", 500], ["TEN", 1000], 
    ["TWENTY", 2000], ["ONE HUNDRED", 10000]
];
function checkCashRegister(price, cash, cid) {
    let returnSum = Math.round(cash *100)- Math.round(price *100);
    let moneyInHand = {};
    let change = {};
    cid.map(function(denomination) {
        moneyInHand[denomination[0]] = Math.round(denomination[1] *100);      
    });
    let index = CID.length-1;

    while (index >= 0 && returnSum > 0) {
        let moneyName = CID[index][0];
        let moneyValue = CID[index][1];
        
        if (returnSum -  moneyValue > 0 && moneyInHand[moneyName], returnSum) {
            change[moneyName] = 0;
            while (moneyInHand[moneyName] > 0 && returnSum - moneyValue >= 0) {
                
                moneyInHand[moneyName] -= moneyValue;
                change[moneyName] += moneyValue;
                returnSum -= moneyValue; 
            }
        }
        index -= 1;
    }
    
    if (returnSum === 0) {

        let isRegisterEmpty = true;
        Object.keys(moneyInHand).map(function(moneyType) {
            console.log(moneyInHand[moneyType] > 0, "MT");
            if(moneyInHand[moneyType] > 0) {
                isRegisterEmpty = false;
            }
        });

        if (isRegisterEmpty) {
            return {
                status: "CLOSED",
                change: cid
            }
        
        } else {
         let changeArray = [];
        Object.keys(change).map(function (moneyType) {
            if (change[moneyType] > 0) {
                changeArray.push([moneyType, change[moneyType]/100]);
            }
        });
        return {status: "OPEN", change: changeArray}
        }
        
    }
}

let cid = [
    ["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]
];

let res = checkCashRegister(19.5, 20, cid);

console.log(res);