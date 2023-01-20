const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200);
    const accounting = require('accounting')
    res.write("<h1>Hi KiD you will calculate tax<h1>");

    //create a subtotal var for calculation
    let subtotal = 49.99;

    //cal the tax
    let tax = subtotal * 0.13;

    //cal total
    let total = subtotal + tax

    //display values
    res.write(`<h5>Sub-total: ${accounting.formatMoney(subtotal)} `);
    res.write(`<h5>Tax : ${accounting.formatMoney(tax)} `);
    res.write(`<h5>Total: ${accounting.formatMoney(total)} `);
    res.end();

}).listen(3000);

console.log("server running")