const lodash = require('lodash');

// console.log(lodash.last([1,2,3,4,5, 99]));

const express = require('express');

const app = express();
const PORT = '3000'
// create a server with express
app.listen(PORT, () => {
  console.log(`server running at port: ${PORT}`)
})

app.get('/', (req, res) => {
  res.send("Hello, you're at home!")
})