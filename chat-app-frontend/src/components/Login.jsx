function digitalRoot(n) {
    if (n < 10) {
        
       const i = n.toString().split('').map(Number);
        i.reduce((num, acc) => num + acc, 0);
        return i;
        
    }

}
console.log(digitalRoot(166));