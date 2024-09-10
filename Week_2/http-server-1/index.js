const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.json()); //bodyparser is required for accessing the body bcz express donesn't support body accesssing

app.get('/collection', function(req, res){
  res.send('<b>Hello World! Something<b>')
})

app.post('/collection', function(req, res){
  console.log(req.headers);
  console.log(req.body);
  const message = req.body.message;
  console.log(message);
  res.json({
    output: "2 + 2 = 4"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})