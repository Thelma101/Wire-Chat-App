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

