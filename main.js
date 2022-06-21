function setup(){
      canvas = createCanvas(900,600);
      canvas.center();
      video = createCapture(VIDEO);
      video.hide();
}
function preload(){
      song1 = loadSound("music.mp3");
      song2 = loadSound("BelieverMP3.mp3");
}
function draw(){
      image(video, 0, 0, 900, 600);
}