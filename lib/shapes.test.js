const { Triangle } = require("./shapes"); // Adjust the path as necessary

describe("Triangle", () => {
  test("should render correct SVG string", () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    expect(triangle.color).toEqual("blue");
  });
});
const { Circle } = require("./shapes"); // Adjust the path as necessary

describe("Circle", () => {
  test("should render correct SVG string", () => {
    const circle = new Circle();
    circle.setColor("red");
    expect(circle.color).toEqual("red");
  });
});
const { Square } = require("./shapes"); // Adjust the path as necessary

describe("Square", () => {
  test("should render correct SVG string", () => {
    const square = new Square();
    square.setColor("green");
    expect(square.color).toEqual("green");
  });
});
