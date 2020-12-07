noseX= 0;
noseY= 0;
function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump= loadSound("jump.wav");
	collects_coin= loadSound("coin.wav");
	game_over= loadSound("game_over.wav");
	kick= loadSound("kick.wav");
	mario_die= loadSound("mario_die.wav");
	
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	
	video= createCapture(VIDEO);
	video.size(800,400)
	video.parent("game_console");

	poseNet= ml5.poseNet(video, modelloaded);
    poseNet.on("pose", gotPoses);


	instializeInSetup(mario);
}

function modelloaded(){
	console.log("model loaded❤✌🏻👍🏻💗💕🎊🏢🦄🔃👊🏻👈🏻🌈🌈🔴🧡🤎🔥")
}

function gotPoses(results){
   if(results.length>0){
	   console.log(results);
	   noseX= results[0].pose.nose.x;
	   noseY= results[0].pose.nose.y;
   }
}

function draw() {
	game()
}






