class Shape {
    constructor(color){
        this.color = color;
    }
}

class Triangle extends Shape {
    constructor(color){
        super(color);
        this.type = 'triangle';
        this.dimensions = `<polygon points="200,10 300,190 100,190" fill="${color}"/> `;
    }
}

class Circle extends Shape {
    constructor(color){
        super(color);
        this.type = 'circle';
        this.dimensions = `<circle cx="150" cy="100" r="100" fill="${color}"/>`;
    }
}

class Square extends Shape {
    constructor(color){
        super(color);
        this.type = 'rect';
        this.dimensions = `<rect width="190" height="190" x="55" y="5" fill="${color}" /> `;
    }
}

// export classes
module.exports = {
    Triangle,
    Circle,
    Square,
};