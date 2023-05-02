const express = require("express")
const path = require("path")

const init = require("../Controller/init")

const router = express.Router()

router.get('/name',init.Name)

router.get('/dev',init.Dev)

router.get('/',init.Root)

module.exports = router