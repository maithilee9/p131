function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}
img ="";

function preload(){
    img = loadImage('https://media.istockphoto.com/photos/underwater-diving-tropical-scene-with-sea-life-in-the-reef-picture-id1323316188?b=1&k=20&m=1323316188&s=170667a&w=0&h=JrRHngkmVzC7jTViUNfZkieOdLZxp19ptUKA8_PXBFg=');
}
function draw() {
    image(img, 0, 0, 640, 420);
    fill("FF0000");
    text("Shark", 45, 75);
    noFill();
    stroke("FF0000");
    rect(30, 60, 450, 350);
}