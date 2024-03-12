const { Circle, Square, Triangle } = require("./shape");

describe("Circle", () => {
  test("render method should return correct SVG string", () => {
    const circle = new Circle("blue");
    expect(circle.render()).toEqual(
      '<circle cx="500" cy="500" r="180" fill="blue" />'
    );
  });
});

describe("Square", () => {
  test("render method should return correct SVG string", () => {
    const square = new Square("red");
    expect(square.render()).toEqual(
      '<rect x="635" y="500" width="400" height="400" fill="red" />'
    );
  });
});

describe("Triangle", () => {
  test("render method should return correct SVG string", () => {
    const triangle = new Triangle("green");
    expect(triangle.render()).toEqual(
      '<polygon points="500,5 865,605 190,605" fill="green" />'
    );
  });
});
