const c = document.querySelector('#canvas');
const canvas = c.getContext('2d');
c.width = window.innerWidth;
c.height = window.innerHeight;

let mouse = {
    x: null,
    y: null,
};

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;

});
window.addEventListener('resize', (event) => {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    init();
});

class Circle {
    constructor(x, y, dx, dy, radius, maxRadius, minRadius, colorArr) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.maxRadius = maxRadius;
        this.minRadius = minRadius;
        this.colorArr = colorArr[Math.floor(Math.random() * colorArr.length)];

    }

    draw() {
        canvas.beginPath();
        canvas.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // canvas.strokeStyle = 'red';
        // canvas.stroke();
        canvas.fillStyle = this.colorArr;
        canvas.fill();
    }

    update() {
        if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        this.y += this.dy;
        this.x += this.dx;

        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.radius < this.maxRadius) {
                this.radius += 1;
            }

        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }

        this.draw();
    }
}


let circleArr = [];

function init () {
    circleArr = [];
    for (let i = 0; i < 500; i++) {
        let radius = Math.random()* 4 + 1;
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        console.log(Math.random() * (innerHeight - radius * 2) + radius);
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        let dx = Math.random() - 0.5;
        let dy = Math.random() - 0.5;
        let maxRadius = 40;
        let minRadius = Math.floor(Math.random() * 5 + 1);
        let colorArr = [
            '#0A5373',
            '#09213E',
            '#FFB856',
            '#F26B5E',
            '#A64C44',
        ];
        circleArr.push(new Circle(x, y, dx, dy, radius, maxRadius, minRadius, colorArr));
    }
}

init();
// let circle = new Circle(100, 100, 4, 4, 30);
animation();

function animation() {
    requestAnimationFrame(animation);
    canvas.clearRect(0, 0, window.innerWidth, window.innerHeight);
    // console.log(circle);
    for (let i = 0; i < circleArr.length; i++) {
        circleArr[i].update();
    }
}
