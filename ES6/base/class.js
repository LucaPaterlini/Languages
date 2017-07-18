// var Pol  = class Polygon{
//     constructor(height, width){
//         this.height = height;
//         this.width = width
//     }
// }
//
// var obj = new Pol(10,12)
// console.log(obj.width)

// 'use strict'
// class Polygon{
//     constructor(height,width){
//         this.h = height;
//         this.w = width;
//     }
//     test(){
//         console.log("The height of the polygon: ", this.h)
//         console.log("The width of the polygon: ", this.w)
//     }
// }
//
// var polyObj = new Polygon(10,20);
// polyObj.test()

// class Person {}
// var obj = new Person()
// var isPerson = obj instanceof Person;
// console.log(" obj is an instance of Person " + isPerson);

// 'use strict'
// class Shape{
//     constructor(a){
//         this.Area = a
//     }
// }
// class Circle extends Shape {
//     disp(){
//         console.log("Area of the circle: "+this.Area);
//     }
// }
// var obj = new Circle(223);
// obj.disp()
//
//
// 'use strict'
// class Root{
//     test(){
//         console.log("call from parent class")
//     }
// }
// class Child extends Root {}
// class Leaf extends Child {}
// var obj = new Leaf()
// obj.test()
//

// 'use strict'
// class PrinterClass{
//     doPrint(){
//         console.log("doPrint() from Parent called.. ")
//     }
// }
// class StringPrinter extends PrinterClass{
//     doPrint(){
//         console.log("doPrint() is printing a string.. ")
//     }
// }
//
// var obj = new StringPrinter()
// obj.doPrint()

'use strict'
class PrinterClass{
    doPrint(){
        console.log("doPrint() from Parent Called...")
    }
}

class StringPrinter extends PrinterClass{
    doPrint(){
        super.doPrint()
        console.log("doPrint() is printing a string")
    }
}
var obj = new StringPrinter()
obj.doPrint()












