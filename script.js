// JS is all about Objects

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
