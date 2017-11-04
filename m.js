/*

*/
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Line {
    constructor(pointA, pointB) {
        this.pointA = pointA;
        this.pointB = pointB;
    }

    getLength() {
        const dx = this.pointA.x - this.pointB.x;
        const dy = this.pointA.y - this.pointB.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

class Triangle {
    constructor(pointA, pointB, pointC) {
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
    }

    getPerimeter() {
        const line1 = new Line(this.pointA, this.pointB);
        const line2 = new Line(this.pointA, this.pointC);
        const line3 = new Line(this.pointB, this.pointC);
        return line1.getLength() + line2.getLength() + line3.getLength();
    }
}

const p1 = new Point(0, 0);
const p2 = new Point(1, 0);
const p3 = new Point(0, 1);
const l1 = new Line(p1, p2);
const t1 = new Triangle(p1, p2, p3);
console.log(l1.getLength());
console.log(t1.getPerimeter());