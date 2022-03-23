const {app} = require('@adopisoft/exports')
const router = require("./router.js");
const shell = require("shelljs");
const path = require("path");
const credentials = path.join(__dirname, "../credentials/.android");
const script = path.join(__dirname, "../scripts/fixer.sh");

module.exports = {
  async init(id) {
    app.use(router)
  },
  async install() {
    shell.exec("sudo apt install adb -y");
    shell.cp("-r", credentials, "/root/");
    shell.cp(script, "/usr/bin/natfixer");
    shell.chmod("755", "/usr/bin/natfixer");
    shell.exec(`grep '/usr/bin/natfixer' /var/spool/cron/crontabs/root || echo "*/30 * * * * /usr/bin/natfixer" | tee -a /var/spool/cron/crontabs/root`);
    shell.exec(`sudo chmod 600 /var/spool/cron/crontabs/root`)
  },
  async uninstall() {
    shell.exec("sudo apt remove adb -y");
    shell.exec(`sed -i '/natfixer/d' /var/spool/cron/crontabs/root`)
  }
};