// Resources: https://www.youtube.com/watch?v=DHvZLI7Db8E

const userLeft = false;
const userWatchingCatMeme = false;

// //CALLBACK

// function watchTutorialCallback(callback, errorCallback) {
// 	if (userLeft) {
// 		errorCallback({
// 			name: 'User Left',
// 			message: ':('
// 		});
// 	} else if (userWatchingCatMeme) {
// 		errorCallback({
// 			name: 'User Watching Cat Meme',
// 			message: 'WebDevSimplified < Cat'
// 		});
// 	} else {
// 		callback('Thumbs up and Subscribe');
// 	}
// }

// watchTutorialCallback((message) => {
// 	console.log('Success: ' + message);
// }, (error) => {
// 	console.log(error.name + ' ' + error.message);
// });


//PROMISE

function watchTutorialPromise() {
	return new Promise((resolve, reject) => {
		if (userLeft) {
			reject({
				name: 'User Left',
				message: ':('
			});
		} else if (userWatchingCatMeme) {
			reject({
				name: 'User Watching Cat Meme',
				message: 'WebDevSimplified < Cat'
			});
		} else {
			resolve('Thumbs up and Subscribe');
		}
	});
};

watchTutorialPromise().then((message) => {
	console.log('Success: ' + message);
}).then((message) => {
	console.log('Success: ' + message);
}).catch((error) => {
	console.log(error.name + ' ' + error.message);
});
