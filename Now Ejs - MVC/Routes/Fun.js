const express = require("express")
const path = require("path")

const Definition = require("../Controller/def")

const router = express.Router() 

router.post('/message', Definition.Message)

router.get('/add', Definition.Add)

module.exports.Router = router