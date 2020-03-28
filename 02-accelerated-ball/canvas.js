import Physics from '../physics.js'

const canvas = document.createElement('canvas');
canvas.id = 'canvas';
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
canvas.style.backgroundColor = '#363636';

document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

function Circle(radius) {
	this.x = canvas.width / 2
	this.y = canvas.height / 2

	this.radius = radius;
	this.velocity = Physics.createVector(0, 15);
	this.acceleration = Physics.createVector(1, 15);
	this.friction = 0.97;

}

Circle.prototype.draw = function() {
	ctx.beginPath();
	ctx.fillStyle = '#FE4365';
	ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
	ctx.fill();
};

Circle.prototype.update = function() {

    this.draw()

	// I don't understand this velocity crap
    this.x += this.velocity.x;
	this.y += this.velocity.y;

	this.velocity.y *= this.acceleration.x
	this.velocity.y += this.acceleration.y	
	
	if (this.x >= canvas.width - this.radius || this.x <= 0) {
		this.velocity.x = -this.velocity.x;
	} else if (this.y >= canvas.height - this.radius || this.y <= 0) {
		this.velocity.y = -this.velocity.y;
	}
}

let circle = new Circle(30)

const animate = function() {
    window.requestAnimationFrame(animate);
	
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	circle.update()
    
};

window.requestAnimationFrame(animate);
