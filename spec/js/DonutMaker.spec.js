let underTest;

describe('FEATURE 1: Have a way to count donuts', () => {
    describe('Should add to donut count', () => {
      
        beforeEach( () =>{
            underTest = new DonutMaker;
        });

        it('Should start with a click count of 0', () => {
            expect(underTest.clickCount).toBe(0);
        });

        it('Should add 1 click to the click counter when it records a click', () => {
            underTest.recordClick();
            expect(underTest.clickCount).toBe(1);
        });

        it ('Should have a click count of 2 when it records 2 clicks', () => {
            underTest.recordClick();
            underTest.recordClick();
            expect(underTest.clickCount).toBe(2);
        });
    });
});
    describe('FEATURE 2 : Be able to purchase the first Auto Clicker with 100 donuts from your donut count', () => {

        beforeEach( () =>{
            underTest = new DonutMaker;
        });
  
       it ('Should retrieve an Auto Clicker count', () => {
            underTest.autoClickerCount();
            expect(underTest.donutCount).toBe(0);
        });
        it ('Should add to the Auto Clicker count', () => {
            underTest.autoClickerCount();
            expect(underTest.donutCount).toBe(1);
        });
        it ('Subtract the Auto Clicker cost from your donut count.', () => {
            underTest.autoClickerCost();
            expect(underTest.donutCount).toBe(0);
        });
     });

    // describe('Feature 3 :  The cost of each Auto Clicker will go up with each purchase.', () => {
    //     beforeEach( () =>{
    //         underTest = new DonutMaker;
    //     });    
        
    //     underTest.autoClickerCost();
    //         expect(underTest.donutCount).toBe();
    // });

 
