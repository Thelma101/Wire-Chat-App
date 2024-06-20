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
function toCamelCase(str) {
    
    const arr = str.split(/[-_]/);
    const newArr = arr.map((word, index) => {
        if (index === 0) {
            return word;
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
    });
    return newArr.join('');
}
  