function sumOfSomething(a,b,callback){
    let val1 = callback(a);
    let val2 = callback(b);
    return val1+val2;
}

console.log(sumOfSomething(9,4,function (n){
        return n*n;
    })
);

console.log(sumOfSomething(9,4,function (n){
        return n*n*n;
    })
);