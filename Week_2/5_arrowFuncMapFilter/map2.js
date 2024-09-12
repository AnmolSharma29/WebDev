const input = [1,2,3,4,5]
function map(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

const ans = map(input,(n)=>{
    return n*10;
});

console.log(ans)