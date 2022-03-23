const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const auth = require('@adopisoft/core/middlewares/auth.js')
const natfixer_ctrl = require("./controllers/natfixer_ctrl.js");

router.get("/natfixer-config", natfixer_ctrl.getSettings);
router.post("/natfixer-config", express.urlencoded({
  extended: true
}), bodyParser.json(), auth, natfixer_ctrl.updateSettings);
module.exports = router;