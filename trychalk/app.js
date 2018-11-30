const chalk = require("chalk");
let red = chalk.red;
function helloBlue() {
  console.log(chalk.blue("Hello world"));
}

function helloRed() {
  console.log(chalk.red("Hello world"));
}
function stringToColor(str, col) {
  //use bracket notation;
  console.log(chalk);
  console.log(chalk[col](str));
}
// stringToColor("This is a test", "red");

function evensBlueOddsYellow(str) {
  let spl = str.split(" ");
  let out = [];
  for (let i = 0; i < spl.length; i++) {
    if (i % 2 === 1) {
      out.push(chalk.blue(spl[i]));
    } else {
      out.push(chalk.yellow(spl[i]));
    }
  }
  return out.join(" ");
}
// evensBlueOddsYellow("this is a test");

function angryText(str) {
  return chalk.red.bold.underline(str.toUpperCase());
}
// console.log(angryText("im maddddddd"));

function backgroundCyan(str) {
  return chalk.white.bgCyan(str);
}
// console.log(backgroundCyan("This is not a test"));
function boldFirstUnderlineLast(str) {
  let spl = str.split(" ");
  let out = [];
  for (let i = 0; i < spl.length; i++) {
    if (i === 0) {
      out.push(chalk.bold(spl[i]));
    } else if (i === spl.length - 1) {
      out.push(chalk.underline(spl[i]));
    } else {
      out.push(spl[i]);
    }
  }
  return out.join(" ");
}
// console.log(boldFirstUnderlineLast("This is also a test"));

function commandLineChalk() {}
