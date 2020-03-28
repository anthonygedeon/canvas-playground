import Engine from '../physics.js'


const canvas = document.createElement('canvas');
canvas.id = 'canvas';
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
canvas.style.backgroundColor = '#363636';

document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

function Circle(radius) {
	this.x = Math.floor(Math.random() * canvas.width);
	this.y = Math.floor(Math.random() * canvas.height);

	this.velocity = Engine.createVector(5, 5)
	this.radius = radius;
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

	if (this.x >= canvas.width - this.radius || this.x <= 0) {
		this.velocity.x = -this.velocity.x;
	} else if (this.y >= canvas.height - this.radius || this.y <= 0) {
		this.velocity.y = -this.velocity.y;
	}
}

const circles = [];

const animate = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < 50; i++) {
        circles.push(new Circle(3));
        circles[i].update()
    }
    
    window.requestAnimationFrame(animate);
};

window.requestAnimationFrame(animate);
