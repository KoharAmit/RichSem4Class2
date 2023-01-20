function parent() {
    let message = "Hello form parent";

    function child() {
        console.log(message)
    }
    child();
}
parent();