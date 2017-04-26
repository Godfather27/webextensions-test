var vendor = require('detect-browser');
browser = require('../polyfills/normalize-extensions');

browser.tabs.query({active: true, currentWindow: true}, tabs => {
  if(browser.runtime.getURL("/index.html")!==tabs[0].url){
    browser.tabs.create({url: browser.runtime.getURL("./index.html")})
  }
})

browser.tabs.query({active: true, currentWindow: true}, tabs => {
  if(browser.runtime.getURL("/index.html")===tabs[0].url){
    tests();
  }
})

let table = document.getElementById('data');
let appendElement = ({api, value})=> {
  let tr = document.createElement('tr');
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

let appendAsync = ({api, value})=>{
  let firstRow = document.getElementById(api.split('.')[1])
  if(firstRow.nextSibling.nextSibling.className==="callback"){
    table.removeChild(firstRow.nextSibling.nextElementSibling)
  }
  let tr = document.createElement('tr');
  tr.setAttribute('class', 'callback')
  firstRow.parentNode.insertBefore(tr, firstRow.nextSibling.nextSibling);
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
  // API KEY - Headline
  let tr = document.createElement('tr');
  tr.setAttribute('id', api)
  table.appendChild(tr)
  let th = document.createElement('th');
  th.setAttribute('colspan', 2);
  tr.appendChild(th)
  th.innerHTML = api

  // Headlines, explenation
  tr = document.createElement('tr');
  table.appendChild(tr)
  th = document.createElement('th');
  tr.appendChild(th)
  th.innerHTML = "API"
  th = document.createElement('th');
  tr.appendChild(th)
  th.innerHTML = vendor.name
}

let tests = ()=>{
  let supported;

  function callback({api, supported}) {
    if(api==="browser.extension.lastError"){
      browser.runtime.lastError
      appendAsync({api, value:(supported && browser.extension.lastError!==undefined)});
    } else if(api==="browser.runtime.lastError"){
      browser.runtime.lastError
      appendAsync({api, value:(supported && browser.runtime.lastError!==undefined)});
    }
  }

/**
 * Alarms API
 */
  supported = browser.alarms!==undefined;
  appendHeading('alarms')

  appendElement({ api: "browser.alarms.create", value: (supported && browser.alarms.create!==undefined)})
  appendElement({ api: "browser.alarms.get", value: (supported && browser.alarms.get!==undefined)});
  appendElement({ api: "browser.alarms.getAll", value: (supported && browser.alarms.getAll!==undefined)});
  appendElement({ api: "browser.alarms.clear", value: (supported && browser.alarms.clear!==undefined)});
  appendElement({ api: "browser.alarms.clearAll", value: (supported && browser.alarms.clearAll!==undefined)});
  appendElement({ api: "browser.alarms.onAlarm", value: (supported && browser.alarms.onAlarm!==undefined)});

  /**
   * bookmarks
   */
  supported = browser.bookmarks!==undefined
  appendHeading('bookmarks')
  
  appendElement({ api: "browser.bookmarks.create", value: (supported && browser.bookmarks.create!==undefined)});
  appendElement({ api: "browser.bookmarks.get", value: (supported && browser.bookmarks.get!==undefined)});
  appendElement({ api: "browser.bookmarks.getChildren", value: (supported && browser.bookmarks.getChildren!==undefined)});
  appendElement({ api: "browser.bookmarks.getRecent", value: (supported && browser.bookmarks.getRecent!==undefined)});
  appendElement({ api: "browser.bookmarks.getSubTree", value: (supported && browser.bookmarks.getSubTree!==undefined)});
  appendElement({ api: "browser.bookmarks.getTree", value: (supported && browser.bookmarks.getTree!==undefined)});
  appendElement({ api: "browser.bookmarks.move", value: (supported && browser.bookmarks.move!==undefined)});
  appendElement({ api: "browser.bookmarks.remove", value: (supported && browser.bookmarks.remove!==undefined)});
  appendElement({ api: "browser.bookmarks.removeTree", value: (supported && browser.bookmarks.removeTree!==undefined)});
  appendElement({ api: "browser.bookmarks.search", value: (supported && browser.bookmarks.search!==undefined)});
  appendElement({ api: "browser.bookmarks.update", value: (supported && browser.bookmarks.update!==undefined)});
  appendElement({ api: "browser.bookmarks.onCreated", value: (supported && browser.bookmarks.onCreated!==undefined)});
  appendElement({ api: "browser.bookmarks.onRemoved", value: (supported && browser.bookmarks.onRemoved!==undefined)});
  appendElement({ api: "browser.bookmarks.onChanged", value: (supported && browser.bookmarks.onChanged!==undefined)});
  appendElement({ api: "browser.bookmarks.onMoved", value: (supported && browser.bookmarks.onMoved!==undefined)});
  appendElement({ api: "browser.bookmarks.onChildrenReordered", value: (supported && browser.bookmarks.onChildrenReordered!==undefined)});
  appendElement({ api: "browser.bookmarks.onImportBegan", value: (supported && browser.bookmarks.onImportBegan!==undefined)});
  appendElement({ api: "browser.bookmarks.onImportEnded", value: (supported && browser.bookmarks.onImportEnded!==undefined)});

  /**
   * browsingData
   */
  supported = browser.browsingData!==undefined
  appendHeading('browsingData')
  
  
  appendElement({ api: "browser.browsingData.remove", value: (supported && browser.browsingData.remove!==undefined)});
  appendElement({ api: "browser.browsingData.removeCache", value: (supported && browser.browsingData.removeCache!==undefined)});
  appendElement({ api: "browser.browsingData.removeCookies", value: (supported && browser.browsingData.removeCookies!==undefined)});
  appendElement({ api: "browser.browsingData.removeDownloads", value: (supported && browser.browsingData.removeDownloads!==undefined)});
  appendElement({ api: "browser.browsingData.removeFormData", value: (supported && browser.browsingData.removeFormData!==undefined)});
  appendElement({ api: "browser.browsingData.removeHistory", value: (supported && browser.browsingData.removeHistory!==undefined)});
  appendElement({ api: "browser.browsingData.removePasswords", value: (supported && browser.browsingData.removePasswords!==undefined)});
  appendElement({ api: "browser.browsingData.removePluginData", value: (supported && browser.browsingData.removePluginData!==undefined)});
  appendElement({ api: "browser.browsingData.settings", value: (supported && browser.browsingData.settings!==undefined)});

  /**
   * commands
   */
  supported = browser.commands!==undefined
  appendHeading('commands')

  appendElement({ api: "browser.commands.getAll", value: (supported && browser.commands.getAll!==undefined)});
  appendElement({ api: "browser.commands.onCommand", value: (supported && browser.commands.onCommand!==undefined)});

  /**
   * contextMenus
   */
  supported = browser.contextMenus!==undefined
  appendHeading('contextMenus')

  appendElement({ api: "browser.contextMenus.ACTION_MENU_TOP_LEVEL_LIMIT", value: (supported && browser.contextMenus.ACTION_MENU_TOP_LEVEL_LIMIT!==undefined)});

  
  appendElement({ api: "browser.contextMenus.create", value: (supported && browser.contextMenus.create!==undefined)});
  appendElement({ api: "browser.contextMenus.update", value: (supported && browser.contextMenus.update!==undefined)});
  appendElement({ api: "browser.contextMenus.remove", value: (supported && browser.contextMenus.remove!==undefined)});
  appendElement({ api: "browser.contextMenus.removeAll", value: (supported && browser.contextMenus.removeAll!==undefined)});
  appendElement({ api: "browser.contextMenus.onClicked", value: (supported && browser.contextMenus.onClicked!==undefined)});

  /**
   * contextualIdentities
   */
  supported = browser.contextualIdentities!==undefined
  appendHeading('contextualIdentities')

  
  appendElement({ api: "browser.contextualIdentities.create", value: (supported && browser.contextualIdentities.create!==undefined)});
  appendElement({ api: "browser.contextualIdentities.get", value: (supported && browser.contextualIdentities.get!==undefined)});
  appendElement({ api: "browser.contextualIdentities.query", value: (supported && browser.contextualIdentities.query!==undefined)});
  appendElement({ api: "browser.contextualIdentities.update", value: (supported && browser.contextualIdentities.update!==undefined)});
  appendElement({ api: "browser.contextualIdentities.remove", value: (supported && browser.contextualIdentities.remove!==undefined)});

  /**
   * cookies
   */
  supported = browser.cookies!==undefined
  appendHeading('cookies')

  
  appendElement({ api: "browser.cookies.get", value: (supported && browser.cookies.get!==undefined)});
  appendElement({ api: "browser.cookies.getAll", value: (supported && browser.cookies.getAll!==undefined)});
  appendElement({ api: "browser.cookies.set", value: (supported && browser.cookies.set!==undefined)});
  appendElement({ api: "browser.cookies.remove", value: (supported && browser.cookies.remove!==undefined)});
  appendElement({ api: "browser.cookies.getAllCookieStores", value: (supported && browser.cookies.getAllCookieStores!==undefined)});
  appendElement({ api: "browser.cookies.onChanged", value: (supported && browser.cookies.onChanged!==undefined)});

  /**
   * downloads
   */
  supported = browser.downloads!==undefined
  appendHeading('downloads')

  
  appendElement({ api: "browser.downloads.download", value: (supported && browser.downloads.download!==undefined)});
  appendElement({ api: "browser.downloads.search", value: (supported && browser.downloads.search!==undefined)});
  appendElement({ api: "browser.downloads.pause", value: (supported && browser.downloads.pause!==undefined)});
  appendElement({ api: "browser.downloads.resume", value: (supported && browser.downloads.resume!==undefined)});
  appendElement({ api: "browser.downloads.cancel", value: (supported && browser.downloads.cancel!==undefined)});
  appendElement({ api: "browser.downloads.getFileIcon", value: (supported && browser.downloads.getFileIcon!==undefined)});
  appendElement({ api: "browser.downloads.open", value: (supported && browser.downloads.open!==undefined)});
  appendElement({ api: "browser.downloads.show", value: (supported && browser.downloads.show!==undefined)});
  appendElement({ api: "browser.downloads.showDefaultFolder", value: (supported && browser.downloads.showDefaultFolder!==undefined)});
  appendElement({ api: "browser.downloads.erase", value: (supported && browser.downloads.erase!==undefined)});
  appendElement({ api: "browser.downloads.removeFile", value: (supported && browser.downloads.removeFile!==undefined)});
  appendElement({ api: "browser.downloads.acceptDanger", value: (supported && browser.downloads.acceptDanger!==undefined)});
  appendElement({ api: "browser.downloads.drag", value: (supported && browser.downloads.drag!==undefined)});
  appendElement({ api: "browser.downloads.setShelfEnabled", value: (supported && browser.downloads.setShelfEnabled!==undefined)});
  appendElement({ api: "browser.downloads.onCreated", value: (supported && browser.downloads.onCreated!==undefined)});
  appendElement({ api: "browser.downloads.onErased", value: (supported && browser.downloads.onErased!==undefined)});
  appendElement({ api: "browser.downloads.onChanged", value: (supported && browser.downloads.onChanged!==undefined)});

  /**
   * events
   */
  console.log('events only hold Event Types')

  /**
   * extension
   */
  supported = browser.extension!==undefined
  appendHeading('extension')

  browser.pageAction.setIcon({"path": "icons/extension-icon-32.png", tabId: 90000}, callback.bind(this, {api: "browser.extension.lastError", supported}))
  appendElement({ api: "browser.extension.inIncognitoContext", value: (supported && browser.extension.inIncognitoContext!==undefined)});
  
  appendElement({ api: "browser.extension.getURL", value: (supported && browser.extension.getURL!==undefined)});
  appendElement({ api: "browser.extension.getViews", value: (supported && browser.extension.getViews!==undefined)});
  appendElement({ api: "browser.extension.getBackgroundPage", value: (supported && browser.extension.getBackgroundPage!==undefined)});
  appendElement({ api: "browser.extension.isAllowedIncognitoAccess", value: (supported && browser.extension.isAllowedIncognitoAccess!==undefined)});
  appendElement({ api: "browser.extension.isAllowedFileSchemeAccess", value: (supported && browser.extension.isAllowedFileSchemeAccess!==undefined)});
  appendElement({ api: "browser.extension.setUpdateUrlData", value: (supported && browser.extension.setUpdateUrlData!==undefined)});
  appendElement({ api: "browser.extension.onRequest", value: (supported && browser.extension.onRequest!==undefined)});
  appendElement({ api: "browser.extension.onRequestExternal", value: (supported && browser.extension.onRequestExternal!==undefined)});

  /**
   * extensionTypes
   */
  console.log('only common API Types')

  /**
   * history
   */
  supported = browser.history!==undefined
  appendHeading('history')

  
  appendElement({ api: "browser.history.search", value: (supported && browser.history.search!==undefined)});
  appendElement({ api: "browser.history.getVisits", value: (supported && browser.history.getVisits!==undefined)});
  appendElement({ api: "browser.history.addUrl", value: (supported && browser.history.addUrl!==undefined)});
  appendElement({ api: "browser.history.deleteUrl", value: (supported && browser.history.deleteUrl!==undefined)});
  appendElement({ api: "browser.history.deleteRange", value: (supported && browser.history.deleteRange!==undefined)});
  appendElement({ api: "browser.history.deleteAll", value: (supported && browser.history.deleteAll!==undefined)});
  appendElement({ api: "browser.history.onVisited", value: (supported && browser.history.onVisited!==undefined)});
  appendElement({ api: "browser.history.onVisitRemoved", value: (supported && browser.history.onVisitRemoved!==undefined)});

  /**
   * i18n
   */
  supported = browser.i18n!==undefined
  appendHeading('i18n')

  
  appendElement({ api: "browser.i18n.getAcceptLanguages", value: (supported && browser.i18n.getAcceptLanguages!==undefined)});
  appendElement({ api: "browser.i18n.getMessage", value: (supported && browser.i18n.getMessage!==undefined)});
  appendElement({ api: "browser.i18n.getUILanguage", value: (supported && browser.i18n.getUILanguage!==undefined)});
  appendElement({ api: "browser.i18n.detectLanguage", value: (supported && browser.i18n.detectLanguage!==undefined)});

  /**
   * identity
   */
  supported = browser.identity!==undefined
  appendHeading('identity')

  
  appendElement({ api: "browser.identity.getRedirectURL", value: (supported && browser.identity.getRedirectURL!==undefined)});
  appendElement({ api: "browser.identity.launchWebAuthFlow", value: (supported && browser.identity.launchWebAuthFlow!==undefined)});

  /**
   * idle
   */
  supported = browser.idle!==undefined
  appendHeading('idle')

  
  appendElement({ api: "browser.idle.queryState", value: (supported && browser.idle.queryState!==undefined)});
  appendElement({ api: "browser.idle.setDetectionInterval", value: (supported && browser.idle.setDetectionInterval!==undefined)});
  appendElement({ api: "browser.idle.onStateChanged", value: (supported && browser.idle.onStateChanged!==undefined)});

  /**
   * management
   */
  supported = browser.management!==undefined
  appendHeading('management')

  
  appendElement({ api: "browser.management.getAll", value: (supported && browser.management.getAll!==undefined)});
  appendElement({ api: "browser.management.get", value: (supported && browser.management.get!==undefined)});
  appendElement({ api: "browser.management.getSelf", value: (supported && browser.management.getSelf!==undefined)});
  appendElement({ api: "browser.management.uninstall", value: (supported && browser.management.uninstall!==undefined)});
  appendElement({ api: "browser.management.uninstallSelf", value: (supported && browser.management.uninstallSelf!==undefined)});
  appendElement({ api: "browser.management.getPermissionWarningsById", value: (supported && browser.management.getPermissionWarningsById!==undefined)});
  appendElement({ api: "browser.management.getPermissionWarningsByManifest", value: (supported && browser.management.getPermissionWarningsByManifest!==undefined)});
  appendElement({ api: "browser.management.setEnabled", value: (supported && browser.management.setEnabled!==undefined)});
  appendElement({ api: "browser.management.onInstalled", value: (supported && browser.management.onInstalled!==undefined)});
  appendElement({ api: "browser.management.onUninstalled", value: (supported && browser.management.onUninstalled!==undefined)});
  appendElement({ api: "browser.management.onEnabled", value: (supported && browser.management.onEnabled!==undefined)});
  appendElement({ api: "browser.management.onDisabled", value: (supported && browser.management.onDisabled!==undefined)});

  /**
   * notifications
   */
  supported = browser.notifications!==undefined
  appendHeading('notifications')

  
  appendElement({ api: "browser.notifications.create", value: (supported && browser.notifications.create!==undefined)});
  appendElement({ api: "browser.notifications.update", value: (supported && browser.notifications.update!==undefined)});
  appendElement({ api: "browser.notifications.clear", value: (supported && browser.notifications.clear!==undefined)});
  appendElement({ api: "browser.notifications.getAll", value: (supported && browser.notifications.getAll!==undefined)});
  appendElement({ api: "browser.notifications.onClosed", value: (supported && browser.notifications.onClosed!==undefined)});
  appendElement({ api: "browser.notifications.onClicked", value: (supported && browser.notifications.onClicked!==undefined)});
  appendElement({ api: "browser.notifications.onButtonClicked", value: (supported && browser.notifications.onButtonClicked!==undefined)});

  /**
   * omnibox
   */
  supported = browser.omnibox!==undefined
  appendHeading('omnibox')

  
  appendElement({ api: "browser.omnibox.setDefaultSuggestion", value: (supported && browser.omnibox.setDefaultSuggestion!==undefined)});
  appendElement({ api: "browser.omnibox.onInputStarted", value: (supported && browser.omnibox.onInputStarted!==undefined)});
  appendElement({ api: "browser.omnibox.onInputChanged", value: (supported && browser.omnibox.onInputChanged!==undefined)});
  appendElement({ api: "browser.omnibox.onInputEntered", value: (supported && browser.omnibox.onInputEntered!==undefined)});
  appendElement({ api: "browser.omnibox.onInputCancelled", value: (supported && browser.omnibox.onInputCancelled!==undefined)});

  /**
   * pageAction
   */
  supported = browser.pageAction!==undefined
  appendHeading('pageAction')

  
  appendElement({ api: "browser.pageAction.show", value: (supported && browser.pageAction.show!==undefined)});
  appendElement({ api: "browser.pageAction.hide", value: (supported && browser.pageAction.hide!==undefined)});
  appendElement({ api: "browser.pageAction.setTitle", value: (supported && browser.pageAction.setTitle!==undefined)});
  appendElement({ api: "browser.pageAction.getTitle", value: (supported && browser.pageAction.getTitle!==undefined)});
  appendElement({ api: "browser.pageAction.setIcon", value: (supported && browser.pageAction.setIcon!==undefined)});
  appendElement({ api: "browser.pageAction.setPopup", value: (supported && browser.pageAction.setPopup!==undefined)});
  appendElement({ api: "browser.pageAction.getPopup", value: (supported && browser.pageAction.getPopup!==undefined)});
  appendElement({ api: "browser.pageAction.onClicked", value: (supported && browser.pageAction.onClicked!==undefined)});

  /**
   * runtime
   */
  supported = browser.runtime!==undefined
  appendHeading('runtime')

  browser.pageAction.setIcon({"path": "icons/extension-icon-32.png", tabId: 90000}, callback.bind(this, {api: "browser.runtime.lastError", supported}))
  appendElement({ api: "browser.runtime.id", value: (supported && browser.runtime.id!==undefined)});
  
  appendElement({ api: "browser.runtime.getBackgroundPage", value: (supported && browser.runtime.getBackgroundPage!==undefined)});
  appendElement({ api: "browser.runtime.openOptionsPage", value: (supported && browser.runtime.openOptionsPage!==undefined)});
  appendElement({ api: "browser.runtime.getManifest", value: (supported && browser.runtime.getManifest!==undefined)});
  appendElement({ api: "browser.runtime.getURL", value: (supported && browser.runtime.getURL!==undefined)});
  appendElement({ api: "browser.runtime.reload", value: (supported && browser.runtime.reload!==undefined)});
  appendElement({ api: "browser.runtime.requestUpdateCheck", value: (supported && browser.runtime.requestUpdateCheck!==undefined)});
  appendElement({ api: "browser.runtime.connect", value: (supported && browser.runtime.connect!==undefined)});
  appendElement({ api: "browser.runtime.connectNative", value: (supported && browser.runtime.connectNative!==undefined)});
  appendElement({ api: "browser.runtime.sendMessage", value: (supported && browser.runtime.sendMessage!==undefined)});
  appendElement({ api: "browser.runtime.sendNativeMessage", value: (supported && browser.runtime.sendNativeMessage!==undefined)});
  appendElement({ api: "browser.runtime.getPlatformInfo", value: (supported && browser.runtime.getPlatformInfo!==undefined)});
  appendElement({ api: "browser.runtime.getBrowserInfo", value: (supported && browser.runtime.getBrowserInfo!==undefined)});
  appendElement({ api: "browser.runtime.getPackageDirectoryEntry", value: (supported && browser.runtime.getPackageDirectoryEntry!==undefined)});
  appendElement({ api: "browser.runtime.onStartup", value: (supported && browser.runtime.onStartup!==undefined)});
  appendElement({ api: "browser.runtime.onInstalled", value: (supported && browser.runtime.onInstalled!==undefined)});
  appendElement({ api: "browser.runtime.onSuspend", value: (supported && browser.runtime.onSuspend!==undefined)});
  appendElement({ api: "browser.runtime.onSuspendCanceled", value: (supported && browser.runtime.onSuspendCanceled!==undefined)});
  appendElement({ api: "browser.runtime.onUpdateAvailable", value: (supported && browser.runtime.onUpdateAvailable!==undefined)});
  appendElement({ api: "browser.runtime.onBrowserUpdateAvailable", value: (supported && browser.runtime.onBrowserUpdateAvailable!==undefined)});
  appendElement({ api: "browser.runtime.onConnect", value: (supported && browser.runtime.onConnect!==undefined)});
  appendElement({ api: "browser.runtime.onConnectExternal", value: (supported && browser.runtime.onConnectExternal!==undefined)});
  appendElement({ api: "browser.runtime.onMessage", value: (supported && browser.runtime.onMessage!==undefined)});
  appendElement({ api: "browser.runtime.onMessageExternal", value: (supported && browser.runtime.onMessageExternal!==undefined)});
  appendElement({ api: "browser.runtime.onRestartRequired", value: (supported && browser.runtime.onRestartRequired!==undefined)});

  /**
   * sessions
   */
  supported = browser.sessions!==undefined
  appendHeading('sessions')

  appendElement({ api: "browser.sessions.MAX_SESSION_RESULTS", value: (supported && browser.sessions.MAX_SESSION_RESULTS!==undefined)});
  
  appendElement({ api: "browser.sessions.getRecentlyClosed", value: (supported && browser.sessions.getRecentlyClosed!==undefined)});
  appendElement({ api: "browser.sessions.restore", value: (supported && browser.sessions.restore!==undefined)});
  appendElement({ api: "browser.sessions.onChanged", value: (supported && browser.sessions.onChanged!==undefined)});

  /**
   * sidebarAction
   */
  supported = browser.sidebarAction!==undefined
  appendHeading('sidebarAction')

  appendElement({ api: "browser.sidebarAction.setPanel", value: (supported && browser.sidebarAction.setPanel!==undefined)});
  appendElement({ api: "browser.sidebarAction.getPanel", value: (supported && browser.sidebarAction.getPanel!==undefined)});
  appendElement({ api: "browser.sidebarAction.setTitle", value: (supported && browser.sidebarAction.setTitle!==undefined)});
  appendElement({ api: "browser.sidebarAction.getTitle", value: (supported && browser.sidebarAction.getTitle!==undefined)});
  appendElement({ api: "browser.sidebarAction.setIcon", value: (supported && browser.sidebarAction.setIcon!==undefined)});

  /**
   * storage
   */
  supported = browser.storage!==undefined
  appendHeading('storage')

  appendElement({ api: "browser.storage.sync", value: (supported && browser.storage.sync!==undefined)});
  appendElement({ api: "browser.storage.local", value: (supported && browser.storage.local!==undefined)});
  appendElement({ api: "browser.storage.managed", value: (supported && browser.storage.managed!==undefined)});
  appendElement({ api: "browser.storage.onChanged", value: (supported && browser.storage.onChanged!==undefined)});

  /**
   * tabs
   */
  supported = browser.tabs!==undefined
  appendHeading('tabs')

  appendElement({ api: "browser.tabs.TAB_ID_NONE", value: (supported && browser.tabs.TAB_ID_NONE!==undefined)});
  
  appendElement({ api: "browser.tabs.connect", value: (supported && browser.tabs.connect!==undefined)});
  appendElement({ api: "browser.tabs.create", value: (supported && browser.tabs.create!==undefined)});
  appendElement({ api: "browser.tabs.captureVisibleTab", value: (supported && browser.tabs.captureVisibleTab!==undefined)});
  appendElement({ api: "browser.tabs.detectLanguage", value: (supported && browser.tabs.detectLanguage!==undefined)});
  appendElement({ api: "browser.tabs.duplicate", value: (supported && browser.tabs.duplicate!==undefined)});
  appendElement({ api: "browser.tabs.executeScript", value: (supported && browser.tabs.executeScript!==undefined)});
  appendElement({ api: "browser.tabs.get", value: (supported && browser.tabs.get!==undefined)});
  appendElement({ api: "browser.tabs.getAllInWindow", value: (supported && browser.tabs.getAllInWindow!==undefined)});
  appendElement({ api: "browser.tabs.getCurrent", value: (supported && browser.tabs.getCurrent!==undefined)});
  appendElement({ api: "browser.tabs.getSelected", value: (supported && browser.tabs.getSelected!==undefined)});
  appendElement({ api: "browser.tabs.getZoom", value: (supported && browser.tabs.getZoom!==undefined)});
  appendElement({ api: "browser.tabs.getZoomSettings", value: (supported && browser.tabs.getZoomSettings!==undefined)});
  appendElement({ api: "browser.tabs.highlight", value: (supported && browser.tabs.highlight!==undefined)});
  appendElement({ api: "browser.tabs.insertCSS", value: (supported && browser.tabs.insertCSS!==undefined)});
  appendElement({ api: "browser.tabs.removeCSS", value: (supported && browser.tabs.removeCSS!==undefined)});
  appendElement({ api: "browser.tabs.move", value: (supported && browser.tabs.move!==undefined)});
  appendElement({ api: "browser.tabs.query", value: (supported && browser.tabs.query!==undefined)});
  appendElement({ api: "browser.tabs.reload", value: (supported && browser.tabs.reload!==undefined)});
  appendElement({ api: "browser.tabs.remove", value: (supported && browser.tabs.remove!==undefined)});
  appendElement({ api: "browser.tabs.sendMessage", value: (supported && browser.tabs.sendMessage!==undefined)});
  appendElement({ api: "browser.tabs.sendRequest", value: (supported && browser.tabs.sendRequest!==undefined)});
  appendElement({ api: "browser.tabs.setZoom", value: (supported && browser.tabs.setZoom!==undefined)});
  appendElement({ api: "browser.tabs.setZoomSettings", value: (supported && browser.tabs.setZoomSettings!==undefined)});
  appendElement({ api: "browser.tabs.update", value: (supported && browser.tabs.update!==undefined)});
  appendElement({ api: "browser.tabs.onActivated", value: (supported && browser.tabs.onActivated!==undefined)});
  appendElement({ api: "browser.tabs.onActiveChanged", value: (supported && browser.tabs.onActiveChanged!==undefined)});
  appendElement({ api: "browser.tabs.onAttached", value: (supported && browser.tabs.onAttached!==undefined)});
  appendElement({ api: "browser.tabs.onCreated", value: (supported && browser.tabs.onCreated!==undefined)});
  appendElement({ api: "browser.tabs.onDetached", value: (supported && browser.tabs.onDetached!==undefined)});
  appendElement({ api: "browser.tabs.onHighlightChanged", value: (supported && browser.tabs.onHighlightChanged!==undefined)});
  appendElement({ api: "browser.tabs.onHighlighted", value: (supported && browser.tabs.onHighlighted!==undefined)});
  appendElement({ api: "browser.tabs.onMoved", value: (supported && browser.tabs.onMoved!==undefined)});
  appendElement({ api: "browser.tabs.onRemoved", value: (supported && browser.tabs.onRemoved!==undefined)});
  appendElement({ api: "browser.tabs.onReplaced", value: (supported && browser.tabs.onReplaced!==undefined)});
  appendElement({ api: "browser.tabs.onSelectionChanged", value: (supported && browser.tabs.onSelectionChanged!==undefined)});
  appendElement({ api: "browser.tabs.onUpdated", value: (supported && browser.tabs.onUpdated!==undefined)});
  appendElement({ api: "browser.tabs.onZoomChange", value: (supported && browser.tabs.onZoomChange!==undefined)});

  /**
   * topSites
   */
  supported = browser.topSites!==undefined
  appendHeading('topSites')

  appendElement({ api: "browser.topSites.get", value: (supported && browser.topSites.get!==undefined)});

  /**
   * webNavigation
   */
  supported = browser.webNavigation!==undefined
  appendHeading('webNavigation')

  appendElement({ api: "browser.webNavigation.getFrame", value: (supported && browser.webNavigation.getFrame!==undefined)});
  appendElement({ api: "browser.webNavigation.getAllFrames", value: (supported && browser.webNavigation.getAllFrames!==undefined)});
  appendElement({ api: "browser.webNavigation.onBeforeNavigate", value: (supported && browser.webNavigation.onBeforeNavigate!==undefined)});
  appendElement({ api: "browser.webNavigation.onCommitted", value: (supported && browser.webNavigation.onCommitted!==undefined)});
  appendElement({ api: "browser.webNavigation.onDOMContentLoaded", value: (supported && browser.webNavigation.onDOMContentLoaded!==undefined)});
  appendElement({ api: "browser.webNavigation.onCompleted", value: (supported && browser.webNavigation.onCompleted!==undefined)});
  appendElement({ api: "browser.webNavigation.onErrorOccurred", value: (supported && browser.webNavigation.onErrorOccurred!==undefined)});
  appendElement({ api: "browser.webNavigation.onCreatedNavigationTarget", value: (supported && browser.webNavigation.onCreatedNavigationTarget!==undefined)});
  appendElement({ api: "browser.webNavigation.onReferenceFragmentUpdated", value: (supported && browser.webNavigation.onReferenceFragmentUpdated!==undefined)});
  appendElement({ api: "browser.webNavigation.onTabReplaced", value: (supported && browser.webNavigation.onTabReplaced!==undefined)});
  appendElement({ api: "browser.webNavigation.onHistoryStateUpdated", value: (supported && browser.webNavigation.onHistoryStateUpdated!==undefined)});

  /**
   * webRequest
   */
  supported = browser.webRequest!==undefined
  appendHeading('webRequest')

  appendElement({ api: "browser.webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES", value: (supported && browser.webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES!==undefined)});
  
  appendElement({ api: "browser.webRequest.handlerBehaviorChanged", value: (supported && browser.webRequest.handlerBehaviorChanged!==undefined)});
  appendElement({ api: "browser.webRequest.onBeforeRequest", value: (supported && browser.webRequest.onBeforeRequest!==undefined)});
  appendElement({ api: "browser.webRequest.onBeforeSendHeaders", value: (supported && browser.webRequest.onBeforeSendHeaders!==undefined)});
  appendElement({ api: "browser.webRequest.onSendHeaders", value: (supported && browser.webRequest.onSendHeaders!==undefined)});
  appendElement({ api: "browser.webRequest.onHeadersReceived", value: (supported && browser.webRequest.onHeadersReceived!==undefined)});
  appendElement({ api: "browser.webRequest.onAuthRequired", value: (supported && browser.webRequest.onAuthRequired!==undefined)});
  appendElement({ api: "browser.webRequest.onResponseStarted", value: (supported && browser.webRequest.onResponseStarted!==undefined)});
  appendElement({ api: "browser.webRequest.onBeforeRedirect", value: (supported && browser.webRequest.onBeforeRedirect!==undefined)});
  appendElement({ api: "browser.webRequest.onCompleted", value: (supported && browser.webRequest.onCompleted!==undefined)});
  appendElement({ api: "browser.webRequest.onErrorOccurred", value: (supported && browser.webRequest.onErrorOccurred!==undefined)});

  /**
   * windows
   */
  supported = browser.windows!==undefined
  appendHeading('windows')

  appendElement({ api: "browser.windows.WINDOW_ID_NONE", value: (supported && browser.windows.WINDOW_ID_NONE!==undefined)});
  appendElement({ api: "browser.windows.WINDOW_ID_CURRENT", value: (supported && browser.windows.WINDOW_ID_CURRENT!==undefined)});
  
  appendElement({ api: "browser.windows.get", value: (supported && browser.windows.get!==undefined)});
  appendElement({ api: "browser.windows.getCurrent", value: (supported && browser.windows.getCurrent!==undefined)});
  appendElement({ api: "browser.windows.getLastFocused", value: (supported && browser.windows.getLastFocused!==undefined)});
  appendElement({ api: "browser.windows.getAll", value: (supported && browser.windows.getAll!==undefined)});
  appendElement({ api: "browser.windows.create", value: (supported && browser.windows.create!==undefined)});
  appendElement({ api: "browser.windows.update", value: (supported && browser.windows.update!==undefined)});
  appendElement({ api: "browser.windows.remove", value: (supported && browser.windows.remove!==undefined)});
  console.error('foo')
  appendElement({ api: "browser.windows.onCreated", value: (supported && browser.windows.onCreated!==undefined)});
  appendElement({ api: "browser.windows.onRemoved", value: (supported && browser.windows.onRemoved!==undefined)});
  appendElement({ api: "browser.windows.onFocusChanged", value: (supported && browser.windows.onFocusChanged!==undefined)});

  if(document.getElementsByClassName('callback').length < 2){
    callback({api: "browser.extension.lastError", supported: false})
    callback({api: "browser.runtime.lastError", supported: false})
  }
}