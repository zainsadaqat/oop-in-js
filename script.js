// JS is all about Objects

console.log(
  '-------------------------- Constructor Property ----------------------------------------'
);

console.log(
  '-------------------------- Constructor Function ----------------------------------------'
);

// Constructor Function
function Circle(radius) {
  console.log('this', this);
  this.radius = radius;
  this.draw = () => {
    console.log('draw');
  };
}

const circle1 = new Circle(1);
circle1.draw();

console.log(
  '-------------------------- Factory Function ----------------------------------------'
);

// Factory Function
const createFunction = (radius) => {
  return {
    radius,
    draw: function () {
      console.log('Radius: ', radius);
    },
  };
};

const circle = createFunction(1);
circle.draw();

console.log(
  '-------------------------- Object Literal ----------------------------------------'
);

// Object Literal
const objectLiteral = {
  location: {
    x: 1,
    y: 1,
  },
  radius: 5,
  draw: function () {
    console.log('Object Literal: ', this.radius);
  },
};

objectLiteral.draw();

// ------------------------------------------------------------------
