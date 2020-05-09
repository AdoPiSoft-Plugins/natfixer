'use strict'
var { app } = require('../core')
var router = require("./router")
var models = require("./models")
var shell = require('shelljs')
var path = require("path")
var credentials = path.join(__dirname, "credentials/.android")
var script = path.join(__dirname, "scripts/fixer.sh")

module.exports = {
  async init(id){
    await models.init()
    app.use(router)
  },
  async install(){
    shell.exec("sudo apt install adb -y")
    shell.cp("-r", credentials, "/root/")
    shell.cp(script, "/usr/bin/natfixer");
    shell.chmod("755", "/usr/bin/natfixer")
    shell.exec(`grep '/usr/bin/natfix' /var/spool/cron/crontabs/root || echo "*/30 * * * * /usr/bin/natfix" | tee -a /var/spool/cron/crontabs/root`)
  },
  async uninstall(){
    shell.exec("sudo apt remove adb -y")
  }
}
