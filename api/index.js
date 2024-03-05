
import express from "express"

const app = express ()

app.use(express.json())

app.get("/test", (req,res)=>{
    res.json("it works")
                    
})

app.listen(3309,()=>{
    console.log("Connected")
})
