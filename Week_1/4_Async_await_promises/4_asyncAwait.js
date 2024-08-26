function asyncFuncn(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Hi There")
        },1000);
    });
}

async function main(){
    
    /*asyncFuncn().then(function(){
        console.log("Hii There");
    })*/

    let value = await asyncFuncn()
    console.log(value)
}

main();