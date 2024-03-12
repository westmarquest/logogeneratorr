import("inquirer")
  .then((module) => {
    const inquirer = module.default;
    const fs = require("fs");

    // Function to prompt user for input
    function promptUser() {
      inquirer
        .prompt([
          {
            type: "input",
            name: "text",
            message: "Enter up to three characters:",
          },
          {
            type: "input",
            name: "textColor",
            message: "Enter text color (keyword or hex):",
          },
          {
            type: "list",
            name: "shape",
            message: "Choose a shape:",
            choices: ["circle", "triangle", "square"],
          },
          {
            type: "input",
            name: "shapeColor",
            message: "Enter shape color (keyword or hex):",
          },
        ])
        .then((answers) => {
          answers.text = answers.text.toUpperCase();
          // Call function to generate SVG based on user input
          generateSVG(answers);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    // Function to generate SVG
    function generateSVG(answers) {
      let svg = "";

      // Generate SVG for text
      let textX = 362;
      let textY = 560;

      // Adjust text position based on selected shape
      switch (answers.shape) {
        case "circle":
          textX = 370;
          textY = 555;
          break;
        case "triangle":
          textX = 375;
          textY = 500;
          break;
        case "square":
          textX = 700;
          textY = 750;
          break;
      }

      const textSVG = `<text x="${textX}" y="${textY}" fill="${answers.textColor}" font-size="140">${answers.text}</text>`;

      // Generate SVG for chosen shape
      let shapeSVG = "";
      switch (answers.shape) {
        case "circle":
          shapeSVG = `<circle cx="500" cy="500" r="180" fill="${answers.shapeColor}" />`;
          break;
        case "triangle":
          shapeSVG = `<polygon points="500,5 865,605 190,605" fill="${answers.shapeColor}" />`;
          break;
        case "square":
          shapeSVG = `<rect x="635" y="500" width="400" height="400" fill="${answers.shapeColor}" />`;
          break;
      }

      // Combine text and shape SVG strings
      svg = `<svg width="2000" height="1000" xmlns="http://www.w3.org/2000/svg">${shapeSVG}${textSVG}</svg>`;

      // Write SVG to file named 'logo.svg'
      fs.writeFile("logo.svg", svg, (err) => {
        if (err) {
          console.error("Error writing SVG to file:", err);
        } else {
          console.log("Generated logo.svg");
        }
      });
    }

    // Call prompt function to start prompting user for input
    promptUser();
  })
  .catch((error) => {
    console.error(error);
  });
