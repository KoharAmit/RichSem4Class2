function displayCounter() {
    let counter = 0;

    // create another var to hold the count so it can be returned

    let increment = () => {
        counter++;
        console.log(counter);

    }
    return increment;
}
//assign a var to the function to create it in memory, but not run it yet
let myfunction = displayCounter();

//run it twice
myfunction();
myfunction();