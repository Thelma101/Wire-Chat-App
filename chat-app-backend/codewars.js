// function digitalRoot(n) {
//     if (n >= 10) {

//        const i = n.toString().split('').map(Number);
//         n = i.reduce((num, acc) => num + acc, 0);   
//         return digitalRoot(n);

//       }
//       return n;
// }
// console.log(digitalRoot(195));
// console.log(digitalRoot(699993));

// function ifChuckNorrisSaysSo() {
//     return !true;
// }
// // ifChuckNorrisSaysSo();
// console.log(ifChuckNorrisSaysSo());

// function isPrime(num) {
//     for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
//         if (num % i == 0) return false;
//     }
//     return num > 1;
// }

// return isPrime(28);
// console.log(isPrime(2));

// list prime numbers
// function listPrimeNumbers(primeNum) {
//     for (i = 2, s = Math.sqrt(primeNum); i <= s; i++) {
//         if (primeNum % i ==0 ) 
//     }
// }

// function listPrimeNumbers(primeNum) {
//     for (i = 2, s = Math.sqrt(primeNum); i <= s; i++) { 
//         if (primeNum % i == 0)
//             return primeNum;
// }
// console.log(listPrimeNumbers(99))
// };

// // console.log(listPrimeNumbers(99));


// ---- square each num and concatenate the result ----
// function squareDigits(num){
//    const digit = num.toString().split('').map(Number);
//     // return 0;
//     for (i = 0; i < digit.length; i++) {
//         digit[i] = digit[i] ** 2;
//     }
//     return digit.join('');
// }
//     console.log(squareDigits (809));

// convert dash/underscore into camel casing. 
// function toCamelCase(stringWord) {
//     const arr = stringWord.split(/[-_]/);
//     const newArr = arr.map((word, index) => {
//         if (index === 0) {
//             return word;
//         } else {
//             return word.charAt(0).toUpperCase() + word.slice(1);
//         }
//     });
//     return newArr.join('');
// }


// const slicedArr = [1, 2, 3, 4, 5];
// const slicedArr2 = slicedArr.slice(1, 5, 90, 30);
// console.log(slicedArr2);

// const reduceArr = [30, 5, 2, 71];
// const reduceArr2 = reduceArr.reduce((a, b) =>
//     a + b, 0
// );
// console.log(reduceArr2);
// // 108 result

// const reduceArr3 = reduceArr.reduce((a, b) => {

//     return a + b;
// }, 0);
// console.log(reduceArr3);

// const reduceArr4 = reduceArr.reduce((a, b) => {
//     return a + b;
// }, 0);
// console.log(reduceArr4);

// const reduceArr5 = reduceArr.reduce((a, b) => {
//     return a + b;
//
// })

// Calculate the sum of an array:
// const arr = [2,4,6,8]
// const arr2 = arr.reduce((a,b) => a + b, 0 );
// console.log(arr2);

// spread operator
// let arr = [2, "bob", 90, "hi"]
// let [x, y, ...z] = arr;
// console.log(x,y,z);

// // swapping array
// let firstName = 'tee';
// let lastName = 'jay';
// // let fullName =  [lastName, firstName] -- correct syntax also
// [firstName, lastName] = [lastName, firstName];
// console.log(firstName)
// console.log(lastName)

// ---- nested object destructuring -------
// let person = {
//     name: {
//         firstName: 'tee',
//         lastName: 'jay'
//     },
//     age: 30,
//     location: {
//         city: 'new york',
//         temp: 90
//     }
// }

// let {name : {firstName, lastName}, name, age, location, location:{temp, city}} = person;
// console.log(name, age, location);

// funtional argument destructuring

// find the average of 2 numbers
// function getStats({max, min}) {
//     return (max + min) / 2;
// }
// console.log(getStats({max:40, min:30}));

// sum to or more numbers
// function sum({a,b,c}) {
//     return a+b+c
// }
// console.log(sum({a:3,b:4,c:5}));

// function subtract({x,y,z})  {
//     return 15-3-2
// }
// console.log(sustract({x:90,y:20,z:30}));

// area of a triangle  -correct also - destructured
// function area(triangle) {
//    let { width, height } = triangle;
//     return width * height / 2;
// }
// console.log(area({ width: 3, height: 4 }));

// non destructured
// function area(width, height) {
//     return width * height / 2
// }
// console.log(area(50,3));

// greeting a person
// function person(greet) {    
//     let sentence = greet
//     return sentence
// }
// console.log(person('hey, how you doing?'));

// function greet({firstName, lastName}) {
//     return `Hello ${firstName}, kindly confirm if your surname is ${lastName}`;
// }
// console.log(greet({firstName:'tee', lastName:'Jay'}));

// Calculating the Average of Three Numbers

// minumun of 3 numbers
// function ave(a,b,c) {
//     return Math.min(a,b,c)
// }
// console.log(ave(30,10,8));

// maximum number fetch
// function max({a,b,c}) {
//     return Math.max(a,b,c)

// }
// console.log(max({a:44,b:55,c:77}));

// parameter of a rectangle
// function perimeter(rectangle) {
//     let {l, b} = rectangle
//     return l * b
// }
// console.log(perimeter({l:40, b:10}));

// another method (parameter of a rectangle)
// function perimeter ({l,b}) {
//     return (2 * (l + b))
// }
// console.log(perimeter({l:40, b:30}));

// average of 3 numbers
// function aveNum(numbers) {
//     return numbers.reduce((a, b) => a + b, 0) / numbers.length;

// }
// console.log(aveNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 2:
// const aveNum = ({x,y,z}) => {
//   return x+y+z / aveNum.length 
// }
// console.log(aveNum({x:12,y:30,z:4}));

// Creating a Full Name
// const fullName = ({firstName, lastName}) => {
//     return `${firstName} ${lastName}`
// }
// console.log(fullName({firstName:'tee', lastName:'Jay'}));
// 2:
// function  fullName({firstName, lastName}) {
//   return `${firstName } ${lastName}`
// } 
// console.log(fullName({firstName:'tee', lastName:'Jay'}));

// join two arrays together
// let arr1 = [2,4,6,8,0,22,46]
// let arr2 = [12,4,51,27,22,90]

// arr1.push(10)
// // arr2.splice(4,1)
//     arr1.pop()

// let arr = arr1.concat([arr2])

// console.log(arr);
// console.log(arr1);
// console.log(arr2);



