

class DonutMaker {

    constructor() {
        this.clickCount = 0;
        this.donutCount = 0;
        this.buyAutoClicker = 100;
        }

    recordClick(){
        this.clickCount++;
    }
    autoClickerCount(){
        this.autoClickerCount++;
    }

    autoClickerCost(){
     if (donutCount >= buyAutoClicker) {
        donutCount -= buyAutoClicker;
    } else {
        return "You need 100 donuts to purchase an Auto Clicker";
    }   return this.donutCount;
}


// Feature 4 
    preventAutoClick(){
        if(this.clickCount < 100 * Math.pow(1.1, this.autoClickerCounter)) {
            return true;
        } else {
            return false;
        }
    };
};

// export {
//     DonutMaker
// }

