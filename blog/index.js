const express = require("express")
const connectDb = require("./config/db")
const dotenv = require("dotenv")
const categoryRouter = require("./router/categoryRouter")
const blogRouter = require("./router/blogRouter")

dotenv.config()

const app = express()
const port = process.env.PORT || 8080

//MIDDLEWARE
app.use(express.json())

app.use("/api/v1/category", categoryRouter)
app.use("/api/v1/blog", blogRouter)



connectDb().then(()=>{
    console.log("database successfully connected")
    app.listen(port, ()=>{
        console.log(`server is running at port ${port}`)
    })
}).catch((e)=>{
    console.log("error:", e)
})


