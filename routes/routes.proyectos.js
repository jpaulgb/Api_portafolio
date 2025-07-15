const express = require("express")
const poryectoControllers = require("../controllers/controllers.proyecto")
const router = express.Router()

router.get("/",poryectoControllers.Hola)

module.exports = router

