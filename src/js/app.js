let count = 0;
let multiplierCount = 0;
let multiplierCost = 10;
let multiplerAmount = 1;
let autoClickerCount = 0;
let autoClickerCost = 100;

const donutCountDisplay = document.querySelector('.donutCount');
const makeDonutButton = document.querySelector('.makeDonutButton');
const buyMultiplier = document.querySelector('.buyMultiplier');
const autoClickerButton = document.querySelector('.autoClickerButton');
const resetGameButton = document.querySelector('.resetGame');

buyMultiplier.disabled = true; 
autoClickerButton.disabled = true;
donutCountDisplay.innerHTML = count;

makeDonutButton.onclick = function addDonut (){
    count += multiplerAmount;
donutCountDisplay.innerHTML = count;
checkPurchases ()
}
buyMultiplier.onclick = function addMultiplier (){
 multiplierCount++;   
 multiplerAmount = Math.pow(1.2, multiplierCount);
 count -= multiplierCost;
 multiplierCost += multiplierCost * 0.1;
 console.log(multiplierCost);
 donutCountDisplay.innerHTML = count;
 checkPurchases ()
}
autoClickerButton.onclick = function addAutoClicker (){
    autoClickerCount++;   
    count -= autoClickerCost;
    autoClickerCost += autoClickerCost * 0.1;
    console.log(autoClickerCost);
    donutCountDisplay.innerHTML = count;
    checkPurchases ()
    let myVar = setInterval(() => {
    donutCountDisplay.innerHTML = count;   
    checkPurchases() ;
    count += multiplerAmount; 
    }, 1000)
}



function checkPurchases (){
    if (count >= multiplierCost){
        buyMultiplier.disabled = false;
    } else {
        buyMultiplier.disabled = true; 
    }
    if (count >= autoClickerCost){
        autoClickerButton.disabled = false;
    } else {
        autoClickerButton.disabled = true; 
    }
}


resetGameButton.onclick = function resetGame() {
    location.reload();
}   
