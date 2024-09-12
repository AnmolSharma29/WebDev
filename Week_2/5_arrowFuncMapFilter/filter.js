//Filtering out even number from Array
//One way of doing this
const arr = [1,2,3,4,5,6,7,8,9,10];
const newArr = [];

for(let idx = 0; idx<arr.length; idx++){
    if(arr[idx] % 2 == 0){
        newArr.push(arr[idx]);
    }
}
console.log(newArr);

//Filtering out even number from Array
//One way of doing this
function filterEven(n){
    if(n%2 == 0){
        return true;
    }
    else{
        return false;
    }
}
const ans = arr.filter(filterEven);
console.log(ans)