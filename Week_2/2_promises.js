function myOwnSetTimeout(fn, duration) {
    setTimeout(fn, duration);
  }
  
  myOwnSetTimeout(function() {
    console.log("log the first thing");
    myOwnSetTimeout(function() {
      console.log("log the second thing");
    }, 2000)
  }, 1000)