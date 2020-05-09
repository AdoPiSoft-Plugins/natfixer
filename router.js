'use strict'

var core = require('../core')
var { router } = core
var natfixer_ctrl = require('./controllers/natfixer_ctrl.js')

router.get('/natfixer-config', natfixer_ctrl.getSettings)
router.post('/natfixer-config', core.middlewares.auth, natfixer_ctrl.updateSettings)

module.exports = router
