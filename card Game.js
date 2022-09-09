var body = document.getElementById("container");
var sources = [
	"images/messi.jpeg",
	"images/messi.jpeg",
	"images/man.jpeg",
	"images/man.jpeg",
	"images/shika.jpeg",
	"images/shika.jpeg",
	"images/zsc.jpeg",
	"images/zsc.jpeg",
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

var matchedPic; // variable hold an array of classes of selected pic
var picVal = []; // array that will store selected pics to be compared based on its index
allImgs.forEach((e, i) => {
	e.setAttribute("src", "images/reddler.jpeg"); //set reddler pic as default for all images

	e.addEventListener("click", () => {
		e.setAttribute("src", sources[uniqueRandomIndex[i]]); //when click display the picture under reddler based on  the unique array
		e.setAttribute("class", sources[uniqueRandomIndex[i]]); // set class to same image above to handle it after vai className
		picVal.push(e.getAttribute("src")); //push pic name (source) to picVal array in idex[0] to be compared with index[1] then after
		if (picVal[1] == picVal[0]) {
			body.style.pointerEvents = "none"; // disable pointer click while it enabled again after
			// check if the new pics that clicked and passed into index[1] equal to brevious index or not
			matchedPic = document.getElementsByClassName(picVal[1]);
			picVal = []; //empty array for next click
			setTimeout(() => {
				// wait some time to hide picture
				Array.from(matchedPic).forEach((e) => {
					e.style.visibility = "hidden"; //get all cards with the same class to remove it
				});
				body.style.pointerEvents = "auto"; // enable click again after 500 ms
			}, 500);
		} else {
			// wait some time to flip card to reddler
			if (picVal.length >= 2) {
				// if check array has 2 element disable pointer click
				body.style.pointerEvents = "none"; // disable pointer click until it flip back to reddler in next statment
				picVal = []; // empty array for next click
			}
			setTimeout(() => {
				e.setAttribute("src", "images/reddler.jpeg"); // set clicked picture back to reddler
				body.style.pointerEvents = "auto"; // enable pointer click again
			}, 1000);
		}
	});
});
