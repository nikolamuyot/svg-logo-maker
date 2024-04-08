// index.js
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");
// import fs from "fs";
// import { Triangle, Circle, Square } from "./lib/shapes.js";

async function main() {
  const inquirer = await import("inquirer").then((module) => module.default);

  const questions = [
    {
      type: "input",
      name: "text",
      message: "Enter text for the logo (up to three characters):",
      validate: (input) =>
        input.length <= 3 || "Text must be up to three characters long.",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter a color for the text (color keyword or hexadecimal):",
      default: "black",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape for the logo:",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter a color for the shape (color keyword or hexadecimal):",
      default: "black",
    },
  ];

  const answers = await inquirer.prompt(questions);

  let shape;
  switch (answers.shape) {
    case "Triangle":
      shape = new Triangle(answers.shapeColor);
      break;
    case "Circle":
      shape = new Circle(answers.shapeColor);
      break;
    case "Square":
      shape = new Square(answers.shapeColor);
      break;
  }

  const svgContent = shape.render();
  const svgWithText = svgContent.replace(
    "</svg>",
    `<text x="50%" y="50%" fill="${answers.textColor}" font-size="40" text-anchor="middle" alignment-baseline="central">${answers.text}</text></svg>`
  );

  fs.writeFileSync("logo.svg", svgWithText);
  console.log("Generated logo.svg");
}

main().catch((error) => console.error(error));
