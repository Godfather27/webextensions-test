var vendor = require('detect-browser')

if(vendor.name === "chrome" || vendor.name === "opera"){
  browser = chrome
  if(vendor.name === "opera"){
    browser.sidebarAction = opr.sidebarAction
  }
}

module.exports = browser;