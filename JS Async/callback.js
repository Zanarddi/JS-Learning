// Resources: https://www.w3schools.com/js/js_callback.asp

/*
// possible way:

function displayer(some){
	console.log(some);
}
function calculator(num1, num2){
	return num1+num2;
}
// let result = calculator(1,5);
// displayer(result);

*/


// A callback is a function passed as an argument to another function
// EXAMPLE:
function displayer(some){
	console.log(some);
}

// In this situation, the myCallback parameter expects a function, that will be called after the sum, allowing the callback.
function calculator(num1, num2, myCallback){
	let sum = num1 + num2;
	myCallback(sum);
}

calculator(1, 7, displayer);

//=========================================
// ANOTHER EXAMPLE:

// Create an array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);	// Arrow function being used, in this case, x is a parameter, and as it doesnt have any {},
																												// It just returns the value after the arrow, wich is a boolean checking if the value is bigger or equal zero


// Keep only positive numbers
function removeNeg(numbers, callback){
	const myArray = [];
	for(const x of numbers){
		if(callback(x)){	// the callback is used here, expecting that the parameter recieved a function that checks if a number is positive or negative
			myArray.push(x);
		}
	}
	return myArray;
}

displayer(myNumbers);
displayer(posNumbers);
