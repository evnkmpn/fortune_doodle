var amntImages = 10;
var rndmNumber = Math.floor(Math.random() * amntImages) + 1;
var randomImage = `./assets/media/doodles/${rndmNumber}.png`;

function setRandomImage() {
    var imgContainer = document.getElementById('random-image');
    imgContainer.src = randomImage;
}

setRandomImage();
console.log(randomImage);