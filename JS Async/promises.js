// Resources: https://www.w3schools.com/js/js_promise.asp
// Part 1
// simple function to log a message
function myDisplayer(message){
    console.log(message);
}

// promise:
// this promise will wait for a fullfillment, it could be a reject or resolution
// the promise object request 2 callback functions, one for each scenario, and those functions will be addressed inside the promised code
let myPromise = new Promise(function(myResolve, myReject){
    let x = 0; //CHANGE HERE TO TEST DIFFERENT RESULTS

    // x will aways be 0, so the only possible result is the "ok" in the myResolve,
    // only one of those 2 will be returned, showing that the resolution is either an error, or a proper value
    if(x == 0){
        myResolve("OK");
    }
    else{
        myReject("ERROR");
    }
});

// here the resolve is used
// it is possible to only use myPromise, without the .then
// however, if i did that, i wouldn't be using the result from the promise in any way
// tha being said, i can use the .then, which will be called after the myPromise execution.
// inside the .then(), it is possible to add functions, using the values 'value' and 'errors',
// value come from the myResolve, and can be undefined if the promise resulted in an error
// error come from the myReject, and can be undefined if the promise was a success.
myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);},
);