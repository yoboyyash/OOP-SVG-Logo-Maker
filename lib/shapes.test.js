// Creating constant to call on extension classes from ./shapes (test suite)

const {Square, Triangle, Circle} = require("./shapes");

// Creating tests for each shape

describe('Square', () => {
    test('renders correctly', () => {
      const shape = new Square();
      var color = ('green')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<rect x="50" y="0" height="100%" width="66.666%" fill="${color}"/>`);
    });
  });

  describe('Triangle', () => {
    test('renders correctly', () => {
      const shape = new Triangle();
      var color =('pink')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<polygon x="0" y="0" height="100%" width="100%" points="150, 0 300, 200 0, 200" fill="${color}"/>`);
    });
  });

  describe('Circle', () => {
    test('renders correctly', () => {
      const shape = new Circle();
      var color =('blue')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="100" height="100%" width="100%" fill="${color}"/>`);
    });
  });