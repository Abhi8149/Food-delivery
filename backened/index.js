const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000
const mongoDB=require("./db")
mongoDB()

app.use(cors({
  origin: 'http://localhost:5173', // adjust to your frontend's origin
}));


app.get('/', (req, res) => {
  res.send('Hello World!')
})



// app.use((req,res,next)=>{
//   res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
//   res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
//   next()
// })
app.use(express.json())
app.use('/api', require('./Routes/createuser'));
app.use('/api', require('./Routes/DisplayData'));
app.use('/api', require('./Routes/Orderdata'));




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})