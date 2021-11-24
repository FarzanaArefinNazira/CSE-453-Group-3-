module.exports = {
    "Muslim Donation":browser => {
      browser.url("https://www.muslimaid.org/")
      browser.pause(5 * 1000)
        browser.click("#i3-MA > header > div.ph__primary > div > div.ph__donate-area > div:nth-child(1) > a.ph__donate")
        const urgentText = "#event-page > div.w-page-header__content > h1"
        browser.assert.containsText(ugentText,"Donate to Muslim Aid")


    }
}