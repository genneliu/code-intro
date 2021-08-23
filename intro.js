console.log("hello world");

const firstName = "Genne";

let age = 26;

console.log(firstName, age);

let favRobot = "Walle";
let favColor = "blue";

// concatenate two strings
console.log(
  `Hello, my name is ${firstName}` + " and I am " + age + " years old"
);

const isCool = true;

let powerLevel;
//undefined

let weaknesses = null;
//null value

//conditions and if else

if (favRobot === "Walle") {
  console.log("Walle is cool");
} else {
  console.log("Ok cool");
}

if (age > 99) {
  console.log("Dang! You're old!");
} else {
  console.log("You're a baby");
}

if (firstName === "Genne") {
  console.log("Hello Genne");
} else {
  console.log("You're not supposed to be here");
}

//boiler plate
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question(
  "Enter a number to see if its what I am thinking of",
  function (answer) {
    if (+answer === 12) {
      console.log("that's it!");
    } else {
      console.log("close");
    }
    reader.close();
  }
);
