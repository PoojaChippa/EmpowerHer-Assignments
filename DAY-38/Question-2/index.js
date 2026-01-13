const boxen = require("boxen");

// 1️. Classic with custom '+' borders
console.log(
  boxen("I am using my first external module!", {
    title: " Hurray!!! ",
    padding: 0,
    margin: 1,
    borderStyle: {
      topLeft: "+",
      topRight: "+",
      bottomRight: "+",
      bottomLeft: "+",
      horizontal: "-",
      vertical: "|",
    },
    titleAlignment: "center",
    textAlignment: "center",
  })
);

// 2️. SingleDouble style
console.log(
  boxen("I am using my first external module!", {
    title: " Hurray!!! ",
    padding: 0,
    margin: 1,
    borderStyle: "singleDouble",
    titleAlignment: "center",
    textAlignment: "center",
  })
);

// 3. Round style with custom text
console.log(
  boxen("unicorns love rainbows", {
    title: " Hurray!!! ",
    padding: 0,
    margin: 1,
    borderStyle: "round",
    titleAlignment: "center",
    textAlignment: "center",
  })
);
