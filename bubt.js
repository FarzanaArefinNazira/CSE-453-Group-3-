module.exports = {
    "Test Google Search": function (browser) {
      browser
        // go to url www.bubt.edu.bd
        .url("https://www.bubt.edu.bd/")
  
        // wait for search box to be visible and type "cse"
        .waitForElementVisible("input[type=text]")
        .setValue("input[type=text]", "admission")
  
        // wait for "Search" button to be visible and click
        .waitForElementVisible('input[value="search"]', 1000)
        .click('input[value="search"]')
  
        // wait for main page to be visible and check if "cse" related search result exists
        .waitForElementVisible("#main", 5000)
        .assert.containsText("#main", "admission")
       
       
        // close the browser
        .end();
    },
  };
  