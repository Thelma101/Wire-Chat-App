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
function listPrimeNumbers(start, end) {
    let primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}
console.log(listPrimeNumbers(7, 100));