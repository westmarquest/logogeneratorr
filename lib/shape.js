class Shape {
  constructor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="500" cy="500" r="180" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="635" y="500" width="400" height="400" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="500,5 865,605 190,605" fill="${this.color}" />`;
  }
}

module.exports = { Circle, Square, Triangle };
