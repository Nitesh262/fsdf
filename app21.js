//middleware - 
//i.its the condition  that is b/w request and response
//ii.its use for security.

//Types -  
//1.built in middleware

//i.this is given by expresss itself.
//ii.express.json() - use to convert json into js object

import express from "express"
const app = express()
 
//built in middleware
app.use(express.json())

app.post("/user",(req,res) => {
    const data = req.body.name
    res.json(data)
})

app.listen(3030,()=>{
    console.log("server runnin on port  3030")
})