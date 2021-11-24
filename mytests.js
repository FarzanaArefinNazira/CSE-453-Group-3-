module.exports = {
                'Demo test bubt.edu.bd' : function (browser) {
                  browser
                    .url('https://www.bubt.edu.bd/')
                    .windowMaximize()
                    .waitForElementVisible('body')
                    .assert.titleContains('BUBT | Top Ranking Best Private University in Bangladesh')
                    .saveScreenshot('cover-fb-and-web.png')

                    .end();
                }
              };