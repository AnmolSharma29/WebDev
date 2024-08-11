function calArith(a,b,opr){
    return opr(a,b);
}

function sum(a,b){
    return(a+b);
}

function sub(a,b){
    return(a-b);
}

console.log(calArith(654,32,sum));