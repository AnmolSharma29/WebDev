function ownAsyncFunc(duration){
    return new Promise(function(resolve){
        setTimeout(resolve, duration);
    })
}

ownAsyncFunc(1000).then(function(){
    console.log("First statement!");
    ownAsyncFunc(2000).then(function(){
        console.log("Second Statement!")
    })
})