// Resources: https://www.w3schools.com/js/js_promise.asp

//TIMEOUT EXAMPLE

//==========================================
// // USING CALLBACK:
// setTimeout(function() { myFunction("Testing!");}, 3000);
// function myFunction(value){
//     console.log(value);
// }
//==========================================


// USING PROMISE:
let myPromise = new Promise(function(myResolve, myReject){
    setTimeout(function() {myResolve("All right!");}, 3000);
});

myPromise.then(
    function(value){
        console.log(value);
    }
);