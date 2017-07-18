/*
 class Shape {
 constructor(id,x,y){this.id = id; this.move(x,y)}
 move(x,y){this.x = x;this.y = y}
 }

 square = new Shape(1,2,2);
 square.move(3,1);
 console.log(square.x,square.y);*/
/*
class Shape {
    constructor(id,x,y){this.id = id; this.move(x,y)}
    move(x,y){this.x = x;this.y = y}
}

class Rectangle extends Shape {
    constructor (id, x, y, width, height){
        super(id, x, y);this.width = width;this.height = height;
    }
}

class Circle extends Shape {
    constructor(id, x, y,radius){super(id,x,y);this.radius = radius}
}
c1 = new Circle(1,2,2,1);console.log(c1.radius);
r1 = new Rectangle(1, 2,2,2,2);console.log(r1.height)*/
/*let aggregation = (baseClass, ...mixins) => {
    let base = class _Combined extends baseClass {
        constructor (...args) {
            super(...args)
            mixins.forEach((mixin) => {
                mixin.prototype.initializer.call(this)
            })
        }
    }
    let copyProps = (target, source) => {
        Object.getOwnPropertyNames(source)
            .concat(Object.getOwnPropertySymbols(source))
            .forEach((prop) => {
                if (prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
                    return
                Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop))
            })
    }
    mixins.forEach((mixin) => {
        copyProps(base.prototype, mixin.prototype)
        copyProps(base, mixin)
    })
    return base
}

class Colored {
    initializer ()     { this._color = "white" }
    get color ()       { return this._color }
    set color (v)      { this._color = v }
}

class ZCoord {
    initializer ()     { this._z = 0 }
    get z ()           { return this._z }
    set z (v)          { this._z = v }
}

class Shape {
    constructor (x, y) { this._x = x; this._y = y }
    get x ()           { return this._x }
    set x (v)          { this._x = v }
    get y ()           { return this._y }
    set y (v)          { this._y = v }
}

class Rectangle extends aggregation(Shape, Colored, ZCoord) {}

let rect = new Rectangle(7, 42)
rect.z     = 1000
rect.color = "red"
console.log(rect.x, rect.y, rect.z, rect.color)*/
/*
class Shape {toString(){ return `Shape(${this.id})`}}
class Rectangle extends Shape {
    constructor(id,x,y,width,height){super(id,x,y)}
    toString(){return "Rectangle > " + super.toString()}
}
class Circle extends Shape {
    constructor(id,x,y,radius){ super(id,x,y)}
    toString(){return "Circle > " + super.toString()}
}

c1= new Circle(1,3,3,2);console.log(c1.toString())
*/
/*class Shape {toString(){ return `Shape(${this.id})`}}
class Rectangle extends Shape {
    static defaultRectangle(){return new Rectangle("default",0,0,100,100)}
}
class Circle extends Shape {
    static defaultCircle () {return new Circle("default",0,0,100)}
}
let defRectangle = Rectangle.defaultRectangle();
let defCircle = Circle.defaultCircle();
console.log(Object.keys(defRectangle));*/
class Rectangle {
    constructor(width, height) {
        this._width = width
        this._height = height
    }
    set width  (width) {this._width = width}
    get width  ()      {return this.width}
    set height (height){this._height = height}
    get height ()      {return this._height}
    get area   ()      {return this._width * this._height}
}
let r = new Rectangle(50,20)
console.log(r.area,r.area === 1000)
