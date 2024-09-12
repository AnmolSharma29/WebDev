//Multiplying 2 with each elements of Array
//One way of doing this
const arr = [1,2,3,4,5];
const newArr = [];

for(let idx = 0; idx<arr.length; idx++){
    newArr.push(2*arr[idx]);
}

const ans = newArr;
console.log(ans);


//Multiplying 2 with each elements of Array
//Doing this with Maps
function multi(n){
    return 2*n;
}

const newAns = newArr.map(multi);
console.log(newAns);