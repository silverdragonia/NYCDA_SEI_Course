//This comes from data.js
let gifs = window.data.data;

let randomButton = document.querySelector('#randomButton');
let gifImg = document.querySelector('#gifImg');


randomButton.addEventListener('click', function() {
	let index = Math.floor(Math.random() * gifs.length);
		if (!gifs[index]) {
			console.error(`index ${index} doesn't exist`, gifs);
		} else {
			gifImg.src = gifs[index].images.original.url;
			gifs.splice(index, 1);
	}
})