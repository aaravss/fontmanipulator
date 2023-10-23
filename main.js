difference = 0;

function preload(){

}

function setup(){
    video = createCapture(VIDEO);
    video.size(550,550);
    canvas = createCanvas(550,550);
    canvas.position(850,30);
    video.position(150,210);
   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialised!');
  }
  
  function gotPoses(results){
    if(results.length>0){
      console.log(results);
      rightWristX = results[0].pose.rightWrist.x;
      leftWristX = results[0].pose.leftWrist.x;
      difference = floor(leftWristX - rightWristX);

      }
  }

function draw(){
    background("orange");
    textSize(difference);
    fill("blue");
    text("Aarav", 30, 300);
}