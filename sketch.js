let canvas, ctx;
let clockDiv = [ 12, 60, 60, 1000 ];

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	ctx = canvas.drawingContext;
}

function draw() {
	background(0);
	
	fill(255);
	noStroke();
	textSize(48);
	textStyle(BOLD);
	textAlign(CENTER, CENTER);
	
	translate(width / 2, height / 2);
	
	let time = new Date();
	// let milliseconds = floor(time.getMilliseconds() / 250) * 250; // Stepping
	let milliseconds = time.getMilliseconds();
	let seconds = time.getSeconds() + milliseconds / clockDiv[3];
	let minutes = time.getMinutes() + seconds / clockDiv[2];
	let hours = time.getHours() % 12 + minutes / clockDiv[1];
	let clock = [ hours, minutes, seconds ];
	
	translate(300, 100);
	
	clock.forEach((n, c) => {
		push();
		let d = clockDiv[c];
		rotate(-n / d * TAU);
		for(let i = 0; i < d; i++) {
			if(i >= n) {
				fill(128, 0, 255, (1 - i / d) * 102.4 + 153.6);
			}
			else {
				fill(255);
			}
			let t = c === 0 ? i || d : i;
			text(t, -400, -200);
			rotate(TAU / d);
		}
		pop();
		translate(150, 0);
	});
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}