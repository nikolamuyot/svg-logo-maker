// lib/shapes.js

class Shape {
  constructor(color = "black") {
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }
}

class Triangle extends Shape {
  render() {
    return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,10 190,190 10,190" fill="${this.color}" /></svg>`;
  }
}

class Circle extends Shape {
  render() {
    return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="80" fill="${this.color}" /></svg>`;
  }
}

class Square extends Shape {
  render() {
    return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" ><rect width="160" height="160" x="100" y="100" fill="${this.color}" /></svg>`;
  }
}

module.exports = { Triangle, Circle, Square };
