//promisfy this async function
//no return
// function myOwnSetTimeout(duration) {
//     setTimeout(duration);
// }

//returning a promise
function promisfiedMyOwnSetTimeout(duration){
    return new Promise(function(resolve){
        setTimeout(resolve, duration);
    })
}

//async await syntax, promise chaining => callbackHell
const ans = promisfiedMyOwnSetTimeout(2000);
ans.then(function(){
    console.log("Something Something");
})
