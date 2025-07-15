const express = require("express")
const proyectoRoutes = require("./routes/routes.proyectos")

const app = express()
const PORT = 3006

//localhost:3006/api/proyectos
//http://localhost:3006/api/proyectos
//configurar
app.set("port",PORT)
app.get("/",(req,res)=>{
    console.log("hola mundo")
    res.send("hola mundo")  
})
app.use("/api/proyectos",proyectoRoutes)

app.listen(PORT,()=>{
    console.log(`escuchando en el puerto ${PORT}`)
})
