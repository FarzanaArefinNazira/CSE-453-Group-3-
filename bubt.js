module.exports = {
                'Demo test bubt.edu.bd/admission' : function (browser) {
                  browser
                    .url('https://bubt.edu.bd/admission')
                    .windowMaximize()
                    .waitForElementVisible('body')
                    .assert.titleContains('BUBT Admission Form')
                    .assert.visible('input[type=text]')
                    .assert.visible('input[type=number]')
                    .assert.visible('input[type=email]')
                    .assert.visible('input[type=tel]')
                    .assert.visible('input[name=hsc_pass_year]')
                    .assert.visible('input[name=hsc_result]')

                    .assert.visible('select[name=program]')
                    
                    .click('button[name=submit]')
                    .click('button[type=submit]')
                    //.assert.containsText('Please contact for any query')
                    //.assert.visible('option[value=Undergraduate Programs]')
                      // .assert.visible('option[value=Facebook]')

                    
                    
                    .end();
                }
              };