function asyncFuncn(){
    return new Promise(function(resolve){
        setTimeout(resolve,2000);
    });
}

asyncFuncn().then(function(){
    console.log("Hii There");
})