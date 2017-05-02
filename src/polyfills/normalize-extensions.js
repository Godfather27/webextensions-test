let vendor = require('detect-browser')

if(vendor.name === "opera" && typeof opr !== "undefined"){
  chrome.sidebarAction = opr.sidebarAction
  browser = undefined
}

if(vendor.name === "edge"){
  chrome = browser
  browser = undefined
}

browser = require('./browser-polyfill');

module.exports = browser;