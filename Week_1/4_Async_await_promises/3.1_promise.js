var d = new Promise(function(resolve){
    resolve(48+185);
});

function callback(){
    console.log(d);
}

d.then(callback);