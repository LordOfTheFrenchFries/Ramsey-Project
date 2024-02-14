var custsceneImages = document.getElementById("cutsceneImages");
var game = false;
var index = 1;
var day = 1;
var images = ["../Start Menu.png", "../James WIlson Marshel GOLD!.png", "../To California!.png", "../Idea.png", "../Selling.png", "../Final.png"];

function switchImageTo(image) {
	custsceneImages.src = image;
}

switchImageTo(images[0]);

function next() {
	switchImageTo(images[index]);
	index++;
	if(index == images.length)
	{
		document.getElementById("next").style.visibility = 'hidden';
	}
}
