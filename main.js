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
    }
  }

function draw(){
    background("orange");
}