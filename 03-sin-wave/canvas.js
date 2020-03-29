import Physics from '../physics.js'

const canvas = document.createElement('canvas');
canvas.id = 'canvas';
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
canvas.style.backgroundColor = '#363636';

document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

let squares = [];

function Square() {
	this.x = 0;
	this.y = canvas.height / 2;

	this.i = 0

	this.width = 5;
	this.height = this.width;
}

Square.prototype.draw = function() {

	ctx.beginPath();
	ctx.moveTo(this.x,this.y);

	this.update()

	ctx.lineTo(this.x, this.y)
	ctx.lineWidth = 3
	ctx.lineCap = 'round'
	ctx.stroke()

};

Square.prototype.update = function() {

	this.x += 10
	this.y += Math.sin(this.i += 10) * 10
}


const animate = function() {
    window.requestAnimationFrame(animate);
	
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	// causing frame drops
	for (let i = 0; i < canvas.width; i++) {
		squares.push(new Square());
	}
	
	for (let square of squares) {
		square.draw()
	}
}

window.requestAnimationFrame(animate)
