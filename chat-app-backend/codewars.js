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

function ifChuckNorrisSaysSo() {
    return !true;
}
ifChuckNorrisSaysSo();

function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i == 0) return false;
    }
    return num > 1;
}

return isPrime(28);
console.log(isPrime(28));