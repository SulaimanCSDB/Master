//12
class Shape{

    constructor(color){

        this.color = color;

    }

    calculatArea(){
    return "Area Calculation not implemented";
    }
};

let m2 = new Shape("red");

// console.log(m2.calculatArea());


class Circle extends Shape{
 
 constructor(color){

    super(color);


 }

};
    const m3 = new Circle("Red");

    console.log(m3.color);