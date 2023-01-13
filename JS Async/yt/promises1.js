// Resources: https://www.youtube.com/watch?v=DHvZLI7Db8E

let p = new Promise((resolve, reject) =>{
	let a = 2 + 1;
	if(a == 2){
		resolve('Success')
	} else {
		reject('Fail');
	}
});

p.then((message) => {
	console.log("This is in the then " + message);
}).catch((message) => {
	console.log("This is in the catch " + message);
})