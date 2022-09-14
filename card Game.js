var body = document.getElementById("container");
var sources = [
	"images/messi.jpeg",
	"images/messi.jpeg",
	"images/dinho.jpeg",
	"images/dinho.jpeg",
	"images/shika.jpeg",
	"images/shika.jpeg",
	"images/cr7.jpeg",
	"images/cr7.jpeg",
	"images/ronaldo.jpg",
	"images/ronaldo.jpg",
	"images/salah.jpeg",
	"images/salah.jpeg",
]; // storing all image sources

var imgCollection = document.getElementsByTagName("img"); //get collection of all imag element
var allImgs = Array.from(imgCollection); // convert collection into array

/// generating unique random numbers with the same rang of sources array
var uniqueRandomIndex = [];
while (uniqueRandomIndex.length < sources.length) {
	var r = Math.floor(Math.random() * sources.length);
	if (uniqueRandomIndex.indexOf(r) === -1) uniqueRandomIndex.push(r);
}

var matchedPic; // variable hold collection of classes of selected pic
var picVal = []; // array that will store selected pics to be compared based on its index
allImgs.forEach((e, i) => {
	e.setAttribute("src", "images/reddler.jpeg"); //set reddler pic as default for all images

	e.addEventListener("click", () => {
		e.setAttribute("src", sources[uniqueRandomIndex[i]]); //when click display the picture under reddler based on  the unique array
		e.setAttribute("class", sources[uniqueRandomIndex[i]]); // set class to same image above to handle it after vai className
		picVal.push(e.getAttribute("src")); //push pic name (source) to picVal array in idex[0] to be compared with index[1] then after
		if (picVal[1] == picVal[0]) {
			// check if the new pics that clicked and passed into index[1] equal to brevious index or not
			body.style.pointerEvents = "none"; // disable pointer click while it enabled again after
			matchedPic = document.getElementsByClassName(picVal[1]); // get className of duplicated pics
			picVal = []; //empty array for next click
			setTimeout(() => {
				// wait some time to hide picture
				Array.from(matchedPic).forEach((e) => {
					e.style.visibility = "hidden"; //get all cards with the same class to remove it
				});
			}, 1000);
			setTimeout(() => {
				body.style.pointerEvents = "all"; // enable pointer click again
			}, 2500);
		} else {
			if (picVal.length >= 2) {
				body.style.pointerEvents = "none"; // disable pointer click until it flip back to reddler in next statment
				picVal = []; // empty array for next click
				// wait some time to flip card to reddler
				setTimeout(() => {
					allImgs.forEach((e) => {
						e.setAttribute("src", "images/reddler.jpeg"); //set reddler pic as default for all images
					});
				}, 2000);
			}
			setTimeout(() => {
				body.style.pointerEvents = "all"; // enable pointer click again
			}, 2500);
		}
	});
});
