let vendor = require('detect-browser')

if(vendor.name === "chrome" || vendor.name === "opera"){
  browser = chrome
}

if(vendor.name === "opera" && typeof opr !== "undefined"){
  chrome.sidebarAction = opr.sidebarAction
}

// browser = require('./browser-polyfill');

module.exports = browser;