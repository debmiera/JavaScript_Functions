console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    for (let i = 1; i <= count; i++){
          if (i % 2!=0) {
              console.log(i)
          } 
    }
}
printOdds(10)

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");


function checkAge(userName,age){
    let checkage = 16
    let aboveSixteen= `Congrats, ${userName} you can can drive!`
let belowSixteen=`Sorry ${userName}, but you will need to wait until you're 16 to drive.`

    if (age < checkage){
        console.log(belowSixteen)
} else {
    console.log(aboveSixteen)
}
}

checkAge ("Deb", 18)

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function checkQuadrant(x, y){
    if (x > 0 && y > 0) {
        return "Quadrant 1";
     } else if (x < 0 && y > 0) {
        return "Quadrant 2";
    } else if (x < 0 && y < 0) {
        return "Quadrant 3";
    } else if (x > 0 && y < 0) {
        return "Quadrant 4";
    } else if (x == 0 && y != 0) {
        return "X Axis";
    } else if (x !=0 && y == 0 ) {
        return "Y Axis";
    } else {
        return "Origin";
    }
}

console.log (checkQuadrant(11,1));
console.log (checkQuadrant(-11,1));
console.log (checkQuadrant(-11,-1));
console.log (checkQuadrant(11,-1));
console.log (checkQuadrant(0,3));
console.log (checkQuadrant(3,0));
console.log (checkQuadrant(0,0));

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function isValidTriangle(a, b, c){
    return a + b < b || a + c > b || b + c > a
}
function checkTriangle (a, b, c) {
    let isValid = isValidTriangle(a, b, c);
    if (isValid) {
        if (a == b && b == c){
            return `Equilateral`;
        } else if (a == b || b == c || a == c) {
            return `Isosceles`;
        } else {
            return `Scalene`;
        }
    }
}

console.log(checkTriangle (1, 3, 3));
console.log(checkTriangle (3, 3, 3));
console.log(checkTriangle (4, 5, 7));

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function dataUsageFeedback (planLimit, day, usage) {
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingDays = periodLength - day;
    let remainingData = planLimit - usage;
    let projectedUsage = remainingDays * currentAvg;
    let statusMsg;

    console.log(`${day} day(s) used, ${periodLength - day} day(s) remaining`);
    console.log(`Average projected use; ${projectedAvg} GB/day`);

    if (currentAvg > projectedAvg) {
        statusMsg = "Exceeding"
    } else if (currentAvg < projectedAvg) {
        statusMsg = "Under";
    }   else {
        statusMsg = "AT";
    }
    console.log(`You are ${statusMsg} your average daily use (${currentAvg} GB/day), continuing this usage, you'll exceed your data plan by ${(usage + projectedUsage) - planLimit} GB.`);
    console.log(`To stay below your data plan, use no more than (${remainingData / day}) GB/day.`);
}

dataUsageFeedback(100, 15, 56)
