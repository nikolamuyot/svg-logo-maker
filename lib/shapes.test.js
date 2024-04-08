const { Triangle } = require("./shapes"); // Adjust the path as necessary

describe("Triangle", () => {
  test("should render correct SVG string", () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    expect(triangle.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});
const { Circle } = require("./shapes"); // Adjust the path as necessary

describe("Circle", () => {
  test("should render correct SVG string", () => {
    const circle = new Circle();
    circle.setColor("red");
    expect(circle.render()).toEqual(
      '<circle cx="150" cy="100" r="80" fill="red" />'
    );
  });
});
const { Square } = require("./shapes"); // Adjust the path as necessary

describe("Square", () => {
  test("should render correct SVG string", () => {
    const square = new Square();
    square.setColor("green");
    expect(square.render()).toEqual(
      '<rect width="160" height="160" x="70" y="20" fill="green" />'
    );
  });
});
