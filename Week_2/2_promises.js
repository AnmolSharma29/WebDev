//promisfy this async function
//no return
function myOwnSetTimeout(fn, duration) {
  setTimeout(fn, duration);
}

//returning a promise
function promisfiedMyOwnSetTimeout(duration){
  return new Promise(function(resolve){
    setTimeout(resolve, duration);
  })
}
  
myOwnSetTimeout(function() {
  console.log("log the first thing");
  myOwnSetTimeout(function() {
    console.log("log the second thing");
  }, 2000)
}, 1000)