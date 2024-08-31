function sumOfTwo(a,b,fn){
    let value1 = a*a;
    let value2 = b*b;
    return new Promise(function(resolve){
        resolve(value1*value2);
    });
}

//not promised function
sumOfTwo(2,5,function(value){
    console.log(value);
})

//promised function
sumOfTwo(2,5).then(function(value){
    console.log(value);
})