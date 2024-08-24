function sum(n){
    let ans = 0;
    for(let i = 1; i <= n;i++){
        ans = ans + i;
    }
    return ans;
}

console.log(sum(100));
console.log(sum(500));
console.log(sum(1000));
console.log(sum(1500));