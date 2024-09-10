var fs = require('fs');

fs.readFile("./Week_1/4_Async_await_promises/a2.txt","utf-8", function(err,data){
        console.log(data);
})