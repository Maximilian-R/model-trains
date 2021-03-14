export class MVector {
    static Create(x = 0, y = 0) {
        return sketch.createVector(x, y);
    }

    static Equals(p1, p2) {
        if (p1.x == p2.x && p1.y == p2.y) return true;
        return false;
    }

    static FromPolar(radius, angle) {
        return this.Create(radius * cos(angle), radius * sin(angle));
    }

    static RotateLeft(v) {
        return this.Create(v.y, -v.x);
    }

    static RotateRight(v) {
        return this.Create(-v.y, v.x);
    }

    static Invert(v) {
        return this.Create(-v.x, -v.y);
    }

    static Add(p1, p2) {
        return p5.Vector.add(p1, p2);
    }

    static Sub(p1, p2) {
        return p5.Vector.sub(p1, p2);
    }

    static Dot(p1, p2) {
        return p5.Vector.dot(p1, p2);
    }

    static Mult(p, v) {
        return p5.Vector.mult(p, v);
    }

    static Div(p, v) {
        return p5.Vector.div(p, v);
    }

    static Dist(p1, p2) {
        return sketch.dist(p1.x, p1.y, p2.x, p2.y);
    }
}
