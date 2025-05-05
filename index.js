// while example
let x = 3;

while (x <= 9) {
    console.log("While count: ", x);
    x++;
}

let dragonEnergy = 30;
while (dragonEnergy > 0) {
    // some code will happen
    console.log("Knight attacks the dragon!")
    dragonEnergy -= 3;
    console.log("Dragon energy: ", dragonEnergy);
}

console.log("The dragon is dead!")

// for example
for (let i = 3; i <= 9; i++) {
    // the code to be executed
    console.log("For count: ", i);
}

for (let pushUps = 6; pushUps <= 20; pushUps += 2) {
    console.log("Push up count: ", pushUps);
}

// do while example
let bites = 0;
do {
    console.log("Take a bite: ", bites);
    bites++;
} while (bites < 3);

let magicPoints = 100;
do {

    magicPoints -= Math.floor(Math.random() * 10) + 1; // subtract a random number between 1 and 10 from magicPoints
    console.log("YOU cast a spell! The magic point cost is " + (magicPoints + 1) + " points.")
    console.log("You have " + magicPoints + " magic points remaining.")
} while (magicPoints > 0);

console.log("You have no magic points left!")