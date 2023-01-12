// Studying using W3 Schools: https://www.w3schools.com/js/js_asynchronous.asp


// Waiting for a Timeout
// When using the JavaScript function setTimeout(), you can specify a callback function to be executed on time-out:
// EXAMPLE:

// the setTimeout function executes the funcion after the specified time
setTimeout(myFunction, 3000);
// setTimeout(function() {myFunction3("Another way"); }, 3000);

function myFunction() {
    console.log("you did it");
}

function myFunction3(message) {
    console.log(message);
}


//=======================================

// the setInterval function does it a bit differently, it recieves the callback function and the interval,
// that way, the function will be called at the end of each interval
setInterval(myFunction2, 1000);

// prints the actual time
function myFunction2(){
    let d = new Date();
    let now =
    d.getHours() + ":" +
    d.getMinutes() + ":" +
    d.getSeconds();
    console.log(now);
}

