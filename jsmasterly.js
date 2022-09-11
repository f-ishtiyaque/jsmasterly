'use strict'
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


// // functions calling another functions

// function fruitInToPieces(fruit){
//     return fruit * 4;
// }

// function fruits(apples , oranges){
//    let applesPieces =  fruitInToPieces(apples);
//    let orangesPieces = fruitInToPieces(oranges);
//     let fruitForJuice = `We need ${applesPieces} apples and ${orangesPieces} oranges for making a tasty Juices`
//     return fruitForJuice;
// }

// let finalResult = fruits(2 , 3);
// console.log(finalResult);


// let ageOfUser = (currentYear , birthYear) => currentYear - birthYear;

// let userInfo = function(retirment){
//     let age = ageOfUser(2022 , 1999);
//     let retirmentAgeGap = retirment - age;
//     let retirmentAge = `Your Current Age is ${age} and ${retirmentAgeGap} year for retirment is left`
//     return retirmentAge;
// }
// let retirmentleft = userInfo(60);
// console.log(retirmentleft);

// let dolphineScore = 20+30+40;
// let koalasScore = 10+80+100; 


// let average = (dolphineScore , koalasScore) =>{
//    let dolphineScoreAVerage = dolphineScore/3;
//    let koalasScoreAVerage = koalasScore/3;
//    let ans = `This is the final answer ${dolphineScoreAVerage} and  ${koalasScoreAVerage}`
//    return ans;
// }




// function scoreCard(dolphineScore , koalasScore){
//     let averagecall = average(dolphineScore , koalasScore);
//     if (dolphineScore >= 2*koalasScore) {
//         console.log('dolphine wins')
//     } else if(koalasScore >= 2*dolphineScore) {
//         console.log('koalas wins')
//     }
//     else{
//         console.log('koi nhu jeeta')
//     }
//     return averagecall;
// };
// let scoreResult = scoreCard(dolphineScore , koalasScore);

// scoreResult;             


// Array

// let age = [10,20,30,40];

// console.log(age);

// let years = new Array(10,20,30,40);
// console.log(years);

// console.log(age[0]);
// console.log(years[0]);
// let age = [10,20,30,40];
// for (let i = 0; i < age.length; i++) {
//     const element = age[i];
//     console.log(element)
// }
// console.log(age.length);


// let friendsOfAli = new Array('Kaif' , 'Saif' , 'Katrina');
// let firstName = 'Ali'

// let inforAboutAli = [firstName , 22 , friendsOfAli , 'Patel'];

// console.log(inforAboutAli.length);

// for (let i = 0; i < inforAboutAli.length; i++) {
//     const element = inforAboutAli[i];
//     console.log(element)
// }

// let calAge = birthYear => 2022 - birthYear;

// let calculate = [1999 ,  2002 , 2005 , 1981];

// for (let i = 0; i < calculate.length; i++) {
//     const element = calculate[i];
//     let ageCalulater =   calAge(element);
//     console.log(ageCalulater);  
// }


// let numberStoring = document.getElementById("numberStoring");
// let submitBtnForArray = document.getElementById("submitBtnForArray");
// let itteration = document.getElementById("itteration");
// let deleteBtn = document.getElementById("deleteBtn");
// let arrayStore = [];
// submitBtnForArray.addEventListener('click' , function(){
//     let arrayValue = parseInt(numberStoring.value);
//     arrayStore.push(arrayValue);
//     let str = '';
//     for (let i = 0; i < arrayStore.length; i++) {
//         const numberItteration = arrayStore[i];
//         str += `<span id="itterate">${numberItteration}</span>` 
//         itteration.innerHTML = str;
//     }
//     str+=itterate;
// })

// let arr = [1,2,3,4,5];
// let one = 6;
// arr.push(6);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift(10);
// console.log(arr);
// arr.indexOf(2);
// console.log(arr)
// let submit_btn = document.getElementById("submitBtnForArray");

// let calculateTip = (billValue,tipValue) => {
//     console.log(tipValue[0]/billValue)
   
//    if(billValue >= 50){
//        billValue = tipValue[0]/billValue + billValue;
       
//        console.log(billValue)
//    }
//    else if(billValue < 100){
//     billValue = billValue/tipValue[1]
//     console.log(billValue)
//    }
//    else{
//     console.log("No tip");
//     console.log(billValue)
//    }
// } 
// submit_btn.addEventListener('click' , function(){
//     let numberStoring = document.getElementById("numberStoring");
//     let billValue = [numberStoring.value];
//     let tipValue1 = 100*25;
//     let tipValue2 = 100*15;
//     let tipValue = [tipValue1 , tipValue2]
//     let billProcess = calculateTip(billValue , tipValue);
//     console.log(billProcess);
// })

// let obj = {
//     firstName: 'Ali',
//     lastName: 'Patel',
//     age: 2022-1999,
//     friend: ['Sharukh' , 'Sachin' , 'Amitabh']
// }

// let nameKey = 'Name';
// console.log(obj[`first${nameKey}`])
// console.log(obj[`last${nameKey}`])

// let aboutMe = prompt(`What you want to know about Ali ? firstName , lastName , age , friend`);

// console.log(obj[`${aboutMe}`]);

// obj.mobileNumber = 8655286927;

// obj[`codeEditor`] = 'Visual Studio Code';

// console.log(obj);

// Jonas has 3 friends and his best friend is Michael using object in Dynamic way

// let lifeOfJonas = {
//     firstName : `Jonas`,
//     friendsName : [`Michael` , 'Samsung' , 'Nokia'],
//   }
  
  
//   console.log(`${lifeOfJonas.firstName} has ${lifeOfJonas.friendsName.length} and his best Friend is ${lifeOfJonas.friendsName[0]}`);
  
//   let objMethod = {
//       firstName : `Ali`,
//       LastName : `Patel`,
//       birthYear : 1999 ,
//       // calAge : function(birthYear){
//       //     return 2022 - birthYear;
//       // }
//       // calAge : function(){
//       //        return 2022 - this.birthYear;
//       // }
//       calAge : function(){
//           this.age = 2022 - this.birthYear;
//           return this.age;
//       }
//   }
  // let abc = objMethod.calAge()
  // console.log(objMethod.calAge())
  // console.log(objMethod[`calAge`]())
  // console.log(objMethod.age)
  // console.log(objMethod.calAge(1999));   //  Dot Notation
  // console.log(objMethod[`calAge`](1999));   //  Bracket Notation
  
  // "Ali is a 22 year old teacher and he has a/not driver's license"
  
//   let aboutMyself = {
//      firstName : `Ali`,
//      birthYear : 1999,
//      hasDriverLicense : `has a driving License`,
//      notHasDriverLicense : `has a driving License`,
//      drivingAge : function(){
//       this.age = 2022 - this.birthYear;
//      },
//      driverAllowed : function(){
//        if (this.age > 18) {
//           return this.hasDriverLicense;
//        } else {
//           return this.notHasDriverLicense;
//        }
//      }
//   }
//   aboutMyself.drivingAge();
//   aboutMyself.driverAllowed();
//   console.log(`${aboutMyself.firstName} is a ${aboutMyself.age} years old teacher and he ${aboutMyself.driverAllowed()}`);
  

// let markBmiObj = {
//     firstName : `Mark`,
//     lastName : `Smith`,
//     mass : 78,
//     height : 1.69,
//     calcBmi : function(){
//        let calculateBmi = this.mass / (this.height * this.height);
//        this.calculatedBmi = [calculateBmi];
//        return calculateBmi;
//     }
// }


// let johnBmiObj = {
//     firstName : `John`,
//     lastName : `Miller`,
//     mass : 92,
//     height : 1.15,
//     calcBmi : function(){
//        let calculateBmi = this.mass / (this.height * this.height);
//        this.calculatedBmi = calculateBmi;
//        return calculateBmi;
//     }
// }

// let markBMI = markBmiObj.calcBmi()
// let johnBMi = johnBmiObj.calcBmi()

// let differece1 = markBmiObj.calculatedBmi - johnBmiObj.calculatedBmi;
// let differece2 = johnBmiObj.calculatedBmi - markBmiObj.calculatedBmi;
// if(markBMI > johnBMi){
//     console.log(`${markBmiObj.firstName} ${markBmiObj.lastName}'s ${markBmiObj.calculatedBmi} is greater than ${johnBmiObj.firstName}${johnBmiObj.lastName}'s ${johnBmiObj.calculatedBmi} by ${differece1}`)
// } 
// else if(markBMI < johnBMi){
//     console.log(`${markBmiObj.firstName} ${markBmiObj.lastName}'s ${markBmiObj.calculatedBmi} is lesser than ${johnBmiObj.firstName}${johnBmiObj.lastName}'s ${johnBmiObj.calculatedBmi} by ${differece2}`)
// }

// looping through the array using for loop

// let aboutMe = [
//    'Ali',
//    'Patel',
//    2022-1999,
//    'duraksha',
//    ['k','s','a',10,11]
// ]
// console.log(aboutMe.length);
// let ali = aboutMe[4];
// for(let i = 0; i <= aboutMe.length-1;i++){
//     console.log(aboutMe[i]);

// }
// for(let j = 0; j<= ali.length-1 ; j++){
//     console.log(ali[j]);
// }

// let years = [1999,2002,2005,1971,1975];
// let currentYear = 2022;
// let arr2 = [];
// for(let i = 0 ; i < years.length ; i++){
//     // here it will exit the current itteration of the loop
//     // example if in an array you will get any number less then 30 it will exit that number 
//     if (currentYear - years[i] < 30) continue; {
//         arr2.push(currentYear - years[i]);
//     }
// }
// console.log(arr2);
// for(let i = 0 ; i < years.length ; i++){
    // here it will exit the whole loop if he will get any number less then 30 therefor you will get empty array over here
//     if (currentYear - years[i] < 30) break; {
//         arr2.push(currentYear - years[i]);
//     }
// }
// console.log(arr2);

// for (let index = 0; index < arr2.length; index++) {
//     const element = arr2[index];
//     console.log(element)
// }
// let loopingItems = document.querySelectorAll('.looping');
// console.log(loopingItems[0]);
// for(let i = 0 ; i < loopingItems.length ; i++){
//     let element = loopingItems[i];
//     arrayValues(element);
// };
// function arrayValues(elements){
//     console.log(elements);
//     let textNode = document. createTextNode("Hello World");
//     elements.appendChild(textNode);
// }

// let arr = [20,30,23,34,56,109];
// let total = [];
// console.log(arr);

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum +=  arr[i];
// }
// total.push(sum);
// console.log(total)
// let average = total => {
//     return total/arr.length
// } 
// let abc = average(total)
// console.log(abc)

// let data = document.querySelectorAll(".pin");
// data.forEach(function (element){
//     element.addEventListener("keyup", ()=>{
//         let i = 0;
//         if (element.value.length >= 3){
//             element.setAttribute('maxlength',4);
//             i++;
//             data[i].focus();
//             console.log(i , data[i])
//         }
//                 console.log(i);
                
//                 // if (i >= data.length-1)  {
//                 //     console.log(i,data.length-1)
//                 // }else{
//                 //     console.log("more than 3")
//                 // }
            
//     })
// })

// Scope Chain

function calAge(birthYear){
    function agePrint() {
        // console.log(firstName)
    }
    agePrint()
    // console.log(firstName);
    currentYear = 2010;
    let age = currentYear - birthYear;
    return age;
}

let date = new Date();
let currentYear = date.getFullYear();
let firstName = `Ali`;
let ageYear = calAge(1999);
// console.log(ageYear);

// Blocked scope

let count = 0;

// if(count === 0){
//     count = 3;
//     count++;
//     console.log(count)
// }
// console.log(count);

// if(count === 0){
// var abc = `Kaif`;
// }
// console.log(abc);


// function experiment(){
    
//     if(count === 0){
//         function abc(a,b){
//             let c = a+b;
//             return c;
//         }
//         console.log(abc(2,3));   
//     }


// }

// console.log(experiment());


// function experiment(){
    
//     if(count === 0){
//         function abc(a,b){
//             let c = a+b;
//             return c;
//         }
//     }
//     console.log(abc(2,3));   


// }

// let a = 2;

// function hoisteds(){
//     console.log(a)
// }
// hoisteds();

// learning about this keyword more
// console.log(this);
// function abc(){
//     console.log(this)
// }
// let cde = function(){
//     console.log('ali')
//    console.log(this);
// }
// cde();
// abc();

// function calDec(){
//     let cdeArrow = () => {
//         console.log(this);
//      }
//     cdeArrow();
// }
// calDec();

// let obj = {
//     firstName: `Ali`,
//     age: '23',
//     birthYear: function(){
//         console.log(this.firstName);
//     },
//     birthYear2: ()=>{
//         console.log(this.firstName);
//     }
// }

// obj.birthYear2();

// let newArrow = function()  {
//     let k = `dfcs`
//     console.log(k)
// }
// newArrow();


// new type
// let solution = this;
// function useDec(){
//    console.log(this);
//    console.log('abc');
//    let calExpression = function(){
//      console.log(this);
//    }
// calExpression();
// let calArrow = ()=> {
//     console.log(this);
//   }
//   calArrow();
// }
// useDec();

// diffrernce between primitive data type and object

// let aPrimitive = 10;
// let bPrimitive = aPrimitive;
// aPrimitive = 11;
// console.log(aPrimitive);
// console.log(bPrimitive);

// when we changes aPrimitive valye then also bPrimitive value does not changes because of a Rule

// but in object it is not that same when we try to merge another object
// let aObj = {
//     age: '12',
// }
// let bObj = aObj;
// console.log(aObj , bObj);
// here if we change the property of age in bObj then aObj will also change unlike the previous one in primative data types because of a rule

// bObj.age = 10;

// console.log(aObj , bObj);

// Destructing an Array

// let startUp={
//     companyName: `Young Ones`,
//     companyIncome: `1.2L Per Annum`,
//     members: [`Ali` , `Kaif`, `Saif` , `Sham`],
//     founders: function(mainMember,subMember){
//         return [this.members[mainMember] , this.members[subMember]]
//     }
// }

// let k = startUp.members[0];
// console.log(k);
// for retrieving 1 member 
// but now array destructing is used

// let [main , submain] = startUp.members;
// console.log(main , submain);
// let [mainMember,subMain] = startUp.founders(1,3);

// console.log(mainMember,subMain); 

// let destructing = document.querySelector('.destructing');
// let submitArr = document.getElementById('submitArr');
// submitArr.addEventListener('click' , function(){
//     let objIterateBySquareBracket = 
// })

let startUp={
    nameCompany: `Excellence`,
    companyWorth: `14L`,
    brances: ['Delhi', `Mumbai`,`Kasmir`,`Kuala Lampur`],
    manager : {
        marketingManager: `Azeem Siddiqui`,
        projectManager: `Khan Hilal`,
        website : {
            frontEnd: `Sameer Shaikh`,
            backEnd: `Tanmay`,
            fullStack: `Ali Patel`,
        },
    },
   teams: [`Azeem`,`Sameer`,`Ali`,`Hilal`,`Tanmay`],
   shopTimings:{
    Delhi :{
        openeing : 10,
        closing: 20,
    },
    Kasmir :{
        openeing : 8,
        closing: 18,
    },
    Mumbai :{
        openeing : 6,
        closing: 16,
    },
    KualaLampur :{
        openeing : 4,
        closing: 14,
    },
   },
   firstorder: function({day,address,time}){
       console.log(`Order will be Deiivered on  ${day} , at ${time} ,in ${address}. Thank You`);
   }
}
let newMemberAdded = ['Ganesh' , ...startUp.teams];
console.log(...newMemberAdded);
console.log(newMemberAdded);
let mixedArr = [...newMemberAdded , ...startUp.brances];
console.log(...mixedArr);
console.log(mixedArr);
let startUpp =  startUp.firstorder({
    day :`Thursday`,
    time: `10 A.M`,
    address: `Sabistan Garden`,
}
);


console.log(startUpp);
let {nameCompany, teams} = startUp;
console.log(nameCompany , teams);
let [az,be,cc,ss,ds] = teams;
console.log(az,be,cc,ss,ds);
// let {nameCompany,companyWorth,brances,manager:{marketingManager,website:{fullStack}},teams:[a]} = startUp;
// console.log(nameCompany,companyWorth,brances,marketingManager,fullStack,a); 
 
// mutating an array

let arrays = [1,2,3,4,5,6];
let [a,b,c,d,e,f] = arrays;


[a,b,c,d,e,f] = [f,e,d,c,b,a];

console.log(a,b,c,d,e,f);

let destructing = document.querySelector('.destructing');
let spreadArray = document.querySelector('.spreadArray');
let submitArr = document.getElementById('submitArr');
submitArr.addEventListener('click' , function(){
    let valueDestructing = destructing.value;
    let valueSpreadArray = spreadArray.value;
    let first = valueDestructing.split('');
    let second = valueSpreadArray.split('');
    let newArr = [...first , ...second];
    // let [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o] = newArr;
    // [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o] = [o,n,m,l,k,j,i,h,g,f,e,d,c,b,a]
    // console.log(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
    console.log(...newArr);
});

let newResturent = {
  menu: ['Pasta','Pizza'],
  order: function(ing1 ,ing2, ing3){
    console.log(`Your Pasta has ${ing1} , ${ing2} and ${ing3} Ingrediants`);
  }
}
// let orderPastaFun = [prompt(`Ingrediant 1 Value`) , prompt(`Ingrediant 1 Value`) , prompt(`Ingrediant 1 Value`)]
let orderPastaFun = [`Callcium`,`Grociries`,`Capsicum`]

console.log(orderPastaFun);
newResturent.order(...orderPastaFun);

// spread operator in objects

let company = {
    nameOfCompany: `terbium`,
    place: `Maharastra Mumbai`,
    owner: `Asif Banatwala`,
}
let newadded = {
    workerWorked: 18,
    accounten: `yes`,
}
let newInfoOfTheCompany = {...company , timings: `10 A.M`,
yearFounded: 2012,...newadded};
console.log(newInfoOfTheCompany);
