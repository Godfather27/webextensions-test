let browser = require('./browser-polyfill.js')

browser.tabs.query({active: true, currentWindow: true}).then(tabs=>{
  if(browser.runtime.getURL("/index.html")!==tabs[0].url){
    browser.tabs.create({url: browser.runtime.getURL("./index.html")})
  }
})

browser.tabs.query({active: true, currentWindow: true}).then(tabs=>{
  if(browser.runtime.getURL("/index.html")===tabs[0].url){
    tests();
  }
})

let table = document.getElementById('data');
let appendElement = ({api, value})=> {
  let tr = document.createElement('tr');
  tr.setAttribute('id', api);
  table.appendChild(tr)
  let td = document.createElement('td');
  tr.appendChild(td);
  td.innerHTML = api;
  td = document.createElement('td');
  td.setAttribute('class', value)
  tr.appendChild(td);
  if(value){
    td.innerHTML = "supported";
  } else {
    td.innerHTML = "not supported"
  }
}

let appendHeading = (api)=>{
  let tr = document.createElement('tr');
  table.appendChild(tr)
  let th = document.createElement('th');
  th.setAttribute('colspan', 2);
  tr.appendChild(th)
  th.innerHTML = api
}

let tests = () =>{
  let supported;

  /**
   * browserAction
   */
  console.log('browserAction start')
  supported = browser.browserAction!==undefined
  appendHeading('BrowserAction')

  console.log('browserAction functions')  
  appendElement({ api: "browser.browserAction.setTitle", value: (supported && browser.browserAction.setTitle!==undefined)});
  appendElement({ api: "browser.browserAction.getTitle", value: (supported && browser.browserAction.getTitle!==undefined)});
  appendElement({ api: "browser.browserAction.setIcon", value: (supported && browser.browserAction.setIcon!==undefined)});
  appendElement({ api: "browser.browserAction.setPopup", value: (supported && browser.browserAction.setPopup!==undefined)});
  appendElement({ api: "browser.browserAction.setBadgeText", value: (supported && browser.browserAction.setBadgeText!==undefined)});
  appendElement({ api: "browser.browserAction.getBadgeText", value: (supported && browser.browserAction.getBadgeText!==undefined)});
  appendElement({ api: "browser.browserAction.setBadgeBackgroundColor", value: (supported && browser.browserAction.setBadgeBackgroundColor!==undefined)});
  appendElement({ api: "browser.browserAction.getBadgeBackgroundColor", value: (supported && browser.browserAction.getBadgeBackgroundColor!==undefined)});
  appendElement({ api: "browser.browserAction.enable", value: (supported && browser.browserAction.enable!==undefined)});
  appendElement({ api: "browser.browserAction.disable", value: (supported && browser.browserAction.disable!==undefined)});

  console.log('browserAction.onClicked')
  if(supported && browser.browserAction.onClicked!==undefined){
    appendElement({ api: "browser.browserAction.onClicked.addListener", value: (supported && browser.browserAction.onClicked.addListener!==undefined)});
    appendElement({ api: "browser.browserAction.onClicked.removeListener", value: (supported && browser.browserAction.onClicked.removeListener!==undefined)});
    appendElement({ api: "browser.browserAction.onClicked.hasListener", value: (supported && browser.browserAction.onClicked.hasListener!==undefined)});
  } else {
    console.log('browserAction.onClicked undefined')
  }
  console.log('browserAction done')
}