function parent() {
    let message = "Hello form parent";

    function child() {
        console.log(message)
    }
    return child; // create child function but doesn't excute it yet

}
//assign a var to parent function
let childfunction = parent();
childfunction();
// parent();