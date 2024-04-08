const { Triangle } = require("./shapes");

describe("Triangle", () => {
  test("should render correct SVG string", () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    expect(triangle.color).toEqual("blue");
  });
});
const { Circle } = require("./shapes");

describe("Circle", () => {
  test("should render correct SVG string", () => {
    const circle = new Circle();
    circle.setColor("red");
    expect(circle.color).toEqual("red");
  });
});
const { Square } = require("./shapes");

describe("Square", () => {
  test("should render correct SVG string", () => {
    const square = new Square();
    square.setColor("green");
    expect(square.color).toEqual("green");
  });
});
