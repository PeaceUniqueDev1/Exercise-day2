// let bechAge = 18;
// let age = 15;

// console.log(age > bechAge)

// let isStudent = true;
// let isMarried = false;
// let isRaining = false;
// let isLightOn = false;
// //let num1 = 1;
// //let num2 = 5;
// //let payment;
// //let status = null;
// //console.log(num1 === num2)
// //console.log(payment)

// let x = 8
// let y = 5;
// //let sum = 0;

// //sum += x  // sum = sum + x
// //sum -= y // sum = sum - y

// //console.log(sum)

// // let numOne = 10;
// // let numTwo = 3;
// // let sum = numOne + numTwo;
// // let diff = numOne - numTwo;
// // let mult = numOne * numTwo;
// // let div = numOne / numTwo;
// // let remainder = numOne % numTwo;
// // let powerOf = numOne ** numTwo;
// // console.log(remainder);
// // console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64

// // console.log(4 < 5)
// // console.log(5 > 4)
// // console.log(6 <= 5)
// // console.log(6 !== 6)

// // const check1 = 4 > 3 && 10 > 5;         // true && true -> true
// // const check2 = 4 > 3 && 10 < 5;        // true && false -> false
// // const check3 = 4 < 3 && 10 < 5;         // false && false -> false

// let val = 6
// let kounterl
// // console.log(kounter)
// // console.log(val)


// kounter = val--

// console.log(kounter)
// console.log(val)

// //data object

// let now = new Date()

// console.log(now)
// console.log(now.getFullYear())
// console.log(now.getTime())
// console.log(now.getDay() +1)
// console.log(now,getHours())
// console.log(now,getMonth() +1)

// //dd /mm/ yy : h:m:s

// let yy = now.getFullYear()
// let mm = now.getMonth()+1 
// let day = now.getDay()
// let hrs = now.getHours()
// let mins =now.getMinutes
// let secs = now.getSeconds()

// console.log(`${date}/${mm}/${yy} : ${hrs}:${mins}:${secs}`)
 

//Assignment
let firstName = "Peace";
let lastName = "Unique"; 
let country = "Nigeria"; 
let city = "Ibadan"; 
let age = 15; 
let isMarried = false; 
let year = 2026;

console.log(typeof firstname);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

console.log(typeof "10" == typeof 10);
console.log(parseInt("9.8") === 10);

console.log(true); 
console.log(10 > 5); 
console.log("Hello");
 
console.log(false); 
console.log(0); 
console.log("");

//true and false
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");

let python = "python"; 
let jargon = "jargon";
console.log(python.length);
console.log(jargon.length);
console.log(python.length !== jargon.length);

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));

let dragon = "dragon";
console.log(!dragon.includes("on") && !python.includes("on"));
let now = new Date(); 

console.log("Year:", now.getFullYear()); 
console.log("Month:", now.getMonth() + 1); 
console.log("Date:", now.getDate()); 
console.log("Day:", now.getDay()); 
console.log("Hours:", now.getHours()); 
console.log("Minutes:", now.getMinutes()); 

// Seconds elapsed from January 1, 1970 to now 
console.log("Seconds elapsed:", Math.floor(Date.now() / 1000));

// class2

let base = prompt("Enter base:"); 
let height = prompt("Enter height:");

let area = 0.5 * base * height;

console.log(`The area of the triangle is ${area}`);

let a = prompt("Enter side a:"); 
let b = prompt("Enter side b:"); 
let c = prompt("Enter side c:");

let perimeter = Number(a) + Number(b) + Number(c);
console.log(`The perimeter of the triangle is + ${perimeter}`);

//class3

let length = Number(prompt("Enter length:"));
let width = Number(prompt("Enter width:"));

let Area = length * width; 
let Perimeter = 2 * (length + width);

console.log(`The area of the rectangle is  + ${area}`); 
console.log(`The perimeter of the rectangle is  + ${perimeter}`);


//class 4
let radius = Number(prompt("Enter radius:"));

let pi = 3.14;

let area1 = pi * radius * radius;
let circumference = 2 * pi * radius;

console.log("The area of the circle is " + area);
console.log("The circumference of the circle is " + circumference);

//class5



//class6
let x1 = 2;
let y1 = 2;

let x2 = 6;
let y2 = 10;

let slope = (y2 - y1) / (x2 - x1);

console.log(`The slope is  + ${slope}`);
 
//class7



//class8
let x = -3; 
let y = x ** 2 + 6 * x + 9; 
console.log("When x =", x, "y =", y);

//class9
let hours = Number(prompt("Enter hours:")); 
let rate = Number(prompt("Enter rate per hour:")); 
let weeklyEarning = hours * rate; 
console.log(`Your weekly earning is  + ${weeklyEarning}`);
  

//class10
let name = prompt("Enter your name:"); 
if (name.length > 7) { console.log("Your name is long"); } 
else { console.log("Your name is short"); }

//class 11
let FirstName = "Asabeneh"; 
let LastName = "Yetayeh"; 
if (firstName.length > lastName.length) {
     console.log( "Your first name, " + firstName + " is longer than your family name, " + lastName ); 
}
else { console.log( "Your family name, " + lastName + " is longer than your first name, " + firstName ); 
}

//class12
let myAge = 250;
let yourAge = 25;
 console.log("I am "+(myAge - yourAge)+ " years older than you")

//class13
let birthYear = Number(prompt("Enter birth year"));
let currentYear = new Date().getFullYear();
let ages = currentYear - birthYear;
if (age >= 18) {
    console.log("You are " + ages + "- You are old enough to drive");
} else {
     console.log("You are " + ages + "- You are not old enough to drive");
}

