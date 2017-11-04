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
}

const p1 = new Point(0, 0);
const p2 = new Point(1, 0);
const l1 = new Line(p1, p2);
