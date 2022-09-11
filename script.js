// 'use strict'
// console.log("Hello");


// let dolphins = 96 + 108 + 89;

// let koalas = 88 + 91 + 110;

// let averageDolphins = dolphins / 2; 

// let averageKoalas = koalas / 2;

// if (averageDolphins > averageKoalas){
//     console.log(`Dolphins has won with ${averageDolphins - averageKoalas} Average Margin`);
// }
// else if(averageDolphins === averageKoalas) {
//     console.log(`Dolphins and Koalas Average are Same`);
// }
// else{
//     console.log(`Koalas has won with ${averageKoalas - averageDolphins} Average Margin`);
// }

// // Learn about ternary operators

// // Ternary operator is basically same as that of if else block but in one line

// // Eg:-

// // let aliAge = 19;

// // let checkAge =  aliAge < 18 ? "This is not Ali": "This is Ali";

// // console.log(checkAge);

// // let abc = `This is ${checkAge}`;

// // console.log(abc);

// // or 



// // let abc = `This is ${aliAge < 18 ? "This is not Ali": "This is Ali"}`;

// // console.log(abc);

// // Learning about a function

// // returning about function value


// // parameters and arguments 

// // when we define a function with a function keyword in that we put parameters. and when ever we call a  function we can use arguments over there

// // function myself(name , age , gender){  // Here we are passing a parameter
// //     let mySelf = `My name is ${name} and i am ${age} year old. I am ${gender}`
// //     return mySelf;
// // }

// // let aboutUs =myself('Ali' , 22 , 'Male');
// // console.log(aboutUs)

// // function declaration


// let cal1 = abc(1,2,3);
// console.log(cal1); // it can  be declared anywhere
// function abc (a, b, c){
//     return a + b + c;
// }


// // function expression expression means value


// let cal2 = function(a,b,c){
//     return a * b * c;
// }
// let cal3 = cal2(1,2,3);
// console.log(cal3) // function expression cant be declared any where else other then where the function is declared it support hoisting

// // Arrow function

// let calArrow = a => a+a;

// let calArrow1 = calArrow(10);

// console.log(calArrow1);// when one parameter no need to have an bracket and when only one logic then no need to have return keyword

// // with many parameters nad return value

// let calArrow3 = (a,b,c) => {
//     let multiply = a * b * c;
//     let add = multiply + a + b + c;
//     return add;
// }

// let calArrow4 = calArrow3(2,3,4);
// console.log(calArrow4);