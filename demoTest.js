module.exports = {
    'Demo test bubt.edu.bd' : function (browser) {
      browser
        .url('https://www.bubt.edu.bd/')
        .windowMaximize()
        .assert.visible('input[type=text]')
        .end();
        }
      };