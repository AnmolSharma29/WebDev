function sqr(n){
    return n*n;
}
function cube(n){
    return n*n*n;
}

function sumOfSomething(a,b,callback){
    let val1 = callback(a);
    let val2 = callback(b);
    return val1+val2;
}

console.log(sumOfSomething(9,4,sqr));
console.log(sumOfSomething(9,4,cube));