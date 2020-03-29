import Physics from '../physics.js';

const canvas = document.createElement('canvas');
canvas.id = 'canvas';
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
canvas.style.backgroundColor = '#000000';

document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

function RocketShip(x, y) {
	
	// position on the (x, y) plane
	this.x = x;
	this.y = y;

	// physics properties
	this.velocity = Physics.createVector(0, 0)
	this.acceleration = Physics.createVector(0, 0)
	this.friction = null;
	this.force = null;
}

RocketShip.prototype.draw = function() {
	ctx.fillStyle = '#ffffff';
	ctx.fillRect(this.x, this.y, 60, 20);
};

RocketShip.prototype.update = function() {
	this.draw();

	this.x += this.velocity.x;
	this.y += this.velocity.y;

	if (this.x < 0 || this.x > canvas.width) {
		this.velocity.x = -this.velocity.x
	} else if (this.y < 0 || this.y > canvas.height) {
		this.velocity.y = -this.velocity.y
	}
};

const rocketShip = new RocketShip(canvas.width / 2, canvas.height / 2);

const animate = function() {
	window.requestAnimationFrame(animate);

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	rocketShip.update();
};

window.requestAnimationFrame(animate);

let [leftArrow, upArrow, rightArrow, downArrow, decelerate] = [65, 87, 68, 83, 66];
window.addEventListener('keydown', event => {


	switch (event.keyCode) {
		case leftArrow:
			rocketShip.velocity.x -= 1;

			break;

		case upArrow:
			rocketShip.velocity.y -= 1;

			break;

		case rightArrow:
			rocketShip.velocity.x += 1;

			break;

		case downArrow:
			rocketShip.velocity.y += 1;

			break;

		case decelerate:
			// breaking system
			rocketShip.velocity.x = 0;
			rocketShip.velocity.y = 0;
	}
});

window.addEventListener('mousemove', event => {

})