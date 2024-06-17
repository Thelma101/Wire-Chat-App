function digitalRoot(n) {
    if (n >= 10) {
        
       const i = n.toString().split('').map(Number);
        n = i.reduce((num, acc) => num + acc, 0);   
        return digitalRoot(n);
        
      }
      return n;
}
console.log(digitalRoot(195));
console.log(digitalRoot(699993));