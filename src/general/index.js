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
  // API KEY - Headline
  let tr = document.createElement('tr');
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
  th.innerHTML = "native"
}

let tests = ()=>{
  let supported;

/**
 * Alarms API
 */
  console.log('alarms start')
  supported = browser.alarms!==undefined;
  appendHeading('Alarms')

  console.log('alarms functions')
  appendElement({ api: "browser.alarms.create", value: (supported && browser.alarms.create!==undefined)})
  appendElement({ api: "browser.alarms.get", value: (supported && browser.alarms.get!==undefined)});
  appendElement({ api: "browser.alarms.getAll", value: (supported && browser.alarms.getAll!==undefined)});
  appendElement({ api: "browser.alarms.clear", value: (supported && browser.alarms.clear!==undefined)});
  appendElement({ api: "browser.alarms.clearAll", value: (supported && browser.alarms.clearAll!==undefined)});
  appendElement({ api: "browser.alarms.onAlarm", value: (supported && browser.alarms.onAlarm!==undefined)});

  console.log('alarms.onAlarm')
  if(supported && browser.alarms.onAlarm!==undefined){
    appendElement({ api: "browser.alarms.onAlarm.addListener", value: (supported && browser.alarms.onAlarm.addListener!==undefined)});
    appendElement({ api: "browser.alarms.onAlarm.removeListener", value: (supported && browser.alarms.onAlarm.removeListener!==undefined)});
    appendElement({ api: "browser.alarms.onAlarm.hasListener", value: (supported && browser.alarms.onAlarm.hasListener!==undefined)});
  } else {
    console.log('alarms.onAlarm undefined')
  }
  console.log('alarms done')

  /**
   * bookmarks
   */
  console.log('bookmarks start')
  supported = browser.bookmarks!==undefined
  appendHeading('Bookmarks')
  
  console.log('bookmarks functions')
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

  console.log('bookmarks.onCreated')
  if(supported && browser.bookmarks.onCreated!==undefined){
    appendElement({ api: "browser.bookmarks.onCreated.addListener", value: (supported && browser.bookmarks.onCreated.addListener!==undefined)});
    appendElement({ api: "browser.bookmarks.onCreated.removeListener", value: (supported && browser.bookmarks.onCreated.removeListener!==undefined)});
    appendElement({ api: "browser.bookmarks.onCreated.hasListener", value: (supported && browser.bookmarks.onCreated.hasListener!==undefined)});
  } else {
    console.log('bookmarks.onCreated undefined')
  }
  console.log('bookmarks.onRemoved')
  if(supported && browser.bookmarks.onRemoved!==undefined){
    appendElement({ api: "browser.bookmarks.onRemoved.addListener", value: (supported && browser.bookmarks.onRemoved.addListener!==undefined)});
    appendElement({ api: "browser.bookmarks.onRemoved.removeListener", value: (supported && browser.bookmarks.onRemoved.removeListener!==undefined)});
    appendElement({ api: "browser.bookmarks.onRemoved.hasListener", value: (supported && browser.bookmarks.onRemoved.hasListener!==undefined)});
  } else {
    console.log('bookmarks.onRemoved undefined')
  }
  console.log('bookmarks.onChanged')
  if(supported && browser.bookmarks.onChanged!==undefined){
    appendElement({ api: "browser.bookmarks.onChanged.addListener", value: (supported && browser.bookmarks.onChanged.addListener!==undefined)});
    appendElement({ api: "browser.bookmarks.onChanged.removeListener", value: (supported && browser.bookmarks.onChanged.removeListener!==undefined)});
    appendElement({ api: "browser.bookmarks.onChanged.hasListener", value: (supported && browser.bookmarks.onChanged.hasListener!==undefined)});
  } else {
    console.log('bookmarks.onChanged undefined')
  }
  console.log('bookmarks.onMoved')
  if(supported && browser.bookmarks.onMoved!==undefined){
    appendElement({ api: "browser.bookmarks.onMoved.addListener", value: (supported && browser.bookmarks.onMoved.addListener!==undefined)});
    appendElement({ api: "browser.bookmarks.onMoved.removeListener", value: (supported && browser.bookmarks.onMoved.removeListener!==undefined)});
    appendElement({ api: "browser.bookmarks.onMoved.hasListener", value: (supported && browser.bookmarks.onMoved.hasListener!==undefined)});
  } else {
    console.log('bookmarks.onMoved undefined')
  }
  console.log('bookmarks.onChildrenReordered')
  if(supported && browser.bookmarks.onChildrenReordered!==undefined){
    appendElement({ api: "browser.bookmarks.onChildrenReordered.addListener", value: (supported && browser.bookmarks.onChildrenReordered.addListener!==undefined)});
    appendElement({ api: "browser.bookmarks.onChildrenReordered.removeListener", value: (supported && browser.bookmarks.onChildrenReordered.removeListener!==undefined)});
    appendElement({ api: "browser.bookmarks.onChildrenReordered.hasListener", value: (supported && browser.bookmarks.onChildrenReordered.hasListener!==undefined)});
  } else {
    console.log('bookmarks.onChildrenReordered undefined')
  }
  console.log('bookmarks.onImportBegan')
  if(supported && browser.bookmarks.onImportBegan!==undefined){
    appendElement({ api: "browser.bookmarks.onImportBegan.addListener", value: (supported && browser.bookmarks.onImportBegan.addListener!==undefined)});
    appendElement({ api: "browser.bookmarks.onImportBegan.removeListener", value: (supported && browser.bookmarks.onImportBegan.removeListener!==undefined)});
    appendElement({ api: "browser.bookmarks.onImportBegan.hasListener", value: (supported && browser.bookmarks.onImportBegan.hasListener!==undefined)});
  } else {
    console.log('bookmarks.onImportBegan undefined')
  }
  console.log('bookmarks.onImportEnded')
  if(supported && browser.bookmarks.onImportEnded!==undefined){
    appendElement({ api: "browser.bookmarks.onImportEnded.addListener", value: (supported && browser.bookmarks.onImportEnded.addListener!==undefined)});
    appendElement({ api: "browser.bookmarks.onImportEnded.removeListener", value: (supported && browser.bookmarks.onImportEnded.removeListener!==undefined)});
    appendElement({ api: "browser.bookmarks.onImportEnded.hasListener", value: (supported && browser.bookmarks.onImportEnded.hasListener!==undefined)});
  } else {
    console.log('bookmarks.onImportEnded undefined')
  }
  console.log('bookmarks done')

  /**
   * browsingData
   */
  console.log('browsingData start')
  supported = browser.browsingData!==undefined
  appendHeading('BrowsingData')
  
  console.log('browsingData functions')
  
  appendElement({ api: "browser.browsingData.remove", value: (supported && browser.browsingData.remove!==undefined)});
  appendElement({ api: "browser.browsingData.removeCache", value: (supported && browser.browsingData.removeCache!==undefined)});
  appendElement({ api: "browser.browsingData.removeCookies", value: (supported && browser.browsingData.removeCookies!==undefined)});
  appendElement({ api: "browser.browsingData.removeDownloads", value: (supported && browser.browsingData.removeDownloads!==undefined)});
  appendElement({ api: "browser.browsingData.removeFormData", value: (supported && browser.browsingData.removeFormData!==undefined)});
  appendElement({ api: "browser.browsingData.removeHistory", value: (supported && browser.browsingData.removeHistory!==undefined)});
  appendElement({ api: "browser.browsingData.removePasswords", value: (supported && browser.browsingData.removePasswords!==undefined)});
  appendElement({ api: "browser.browsingData.removePluginData", value: (supported && browser.browsingData.removePluginData!==undefined)});
  appendElement({ api: "browser.browsingData.settings", value: (supported && browser.browsingData.settings!==undefined)});
  console.log('browsingData done')

  /**
   * commands
   */
  console.log('commands start')
  supported = browser.commands!==undefined
  appendHeading('Commands')

  console.log('commands functions')
  
  appendElement({ api: "browser.commands.getAll", value: (supported && browser.commands.getAll!==undefined)});

  console.log('commands.onCommand')
  if(supported && browser.commands.onCommand!==undefined){
    appendElement({ api: "browser.commands.onCommand.addListener", value: (supported && browser.commands.onCommand.addListener!==undefined)});
    appendElement({ api: "browser.commands.onCommand.removeListener", value: (supported && browser.commands.onCommand.removeListener!==undefined)});
    appendElement({ api: "browser.commands.onCommand.hasListener", value: (supported && browser.commands.onCommand.hasListener!==undefined)});
  } else {
    console.log('commands.onCommand undefined')
  }
  console.log('commands done')

  /**
   * contextMenus
   */
  console.log('contextMenus start')
  supported = browser.contextMenus!==undefined
  appendHeading('ContextMenus')

  console.log('contextMenus properties')
  appendElement({ api: "browser.contextMenus.ACTION_MENU_TOP_LEVEL_LIMIT", value: (supported && browser.contextMenus.ACTION_MENU_TOP_LEVEL_LIMIT!==undefined)});

  console.log('contextMenus functions')
  
  appendElement({ api: "browser.contextMenus.create", value: (supported && browser.contextMenus.create!==undefined)});
  appendElement({ api: "browser.contextMenus.update", value: (supported && browser.contextMenus.update!==undefined)});
  appendElement({ api: "browser.contextMenus.remove", value: (supported && browser.contextMenus.remove!==undefined)});
  appendElement({ api: "browser.contextMenus.removeAll", value: (supported && browser.contextMenus.removeAll!==undefined)});

  console.log('contextMenus.onClicked')
  if(supported && browser.contextMenus.onClicked!==undefined){
    appendElement({ api: "browser.contextMenus.onClicked.addListener", value: (supported && browser.contextMenus.onClicked.addListener!==undefined)});
    appendElement({ api: "browser.contextMenus.onClicked.removeListener", value: (supported && browser.contextMenus.onClicked.removeListener!==undefined)});
    appendElement({ api: "browser.contextMenus.onClicked.hasListener", value: (supported && browser.contextMenus.onClicked.hasListener!==undefined)});
  } else {
    console.log('contextMenus.onClicked undefined')
  }
  console.log('contextMenus done')

  /**
   * contextualIdentities
   */
  console.log('contextualIdentities start')
  supported = browser.contextualIdentities!==undefined
  appendHeading('ContextualIdentities')

  console.log('contextualIdentities functions')
  
  appendElement({ api: "browser.contextualIdentities.create", value: (supported && browser.contextualIdentities.create!==undefined)});
  appendElement({ api: "browser.contextualIdentities.get", value: (supported && browser.contextualIdentities.get!==undefined)});
  appendElement({ api: "browser.contextualIdentities.query", value: (supported && browser.contextualIdentities.query!==undefined)});
  appendElement({ api: "browser.contextualIdentities.update", value: (supported && browser.contextualIdentities.update!==undefined)});
  appendElement({ api: "browser.contextualIdentities.remove", value: (supported && browser.contextualIdentities.remove!==undefined)});
  console.log('contextualIdentities done')

  /**
   * cookies
   */
  console.log('cookies start')
  supported = browser.cookies!==undefined
  appendHeading('Cookies')

  console.log('cookies functions')
  
  appendElement({ api: "browser.cookies.get", value: (supported && browser.cookies.get!==undefined)});
  appendElement({ api: "browser.cookies.getAll", value: (supported && browser.cookies.getAll!==undefined)});
  appendElement({ api: "browser.cookies.set", value: (supported && browser.cookies.set!==undefined)});
  appendElement({ api: "browser.cookies.remove", value: (supported && browser.cookies.remove!==undefined)});
  appendElement({ api: "browser.cookies.getAllCookieStores", value: (supported && browser.cookies.getAllCookieStores!==undefined)});

  console.log('cookies.onChanged')
  if(supported && browser.cookies.onChanged!==undefined){
    appendElement({ api: "browser.cookies.onChanged.addListener", value: (supported && browser.cookies.onChanged.addListener!==undefined)});
    appendElement({ api: "browser.cookies.onChanged.removeListener", value: (supported && browser.cookies.onChanged.removeListener!==undefined)});
    appendElement({ api: "browser.cookies.onChanged.hasListener", value: (supported && browser.cookies.onChanged.hasListener!==undefined)});
  } else {
    console.log('cookies.onChanged undefined')
  }
  console.log('cookies done')

  /**
   * downloads
   */
  console.log('downloads start')
  supported = browser.downloads!==undefined
  appendHeading('Downloads')

  console.log('downloads functions')
  
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

  console.log('downloads.onCreated')
  if(supported && browser.downloads.onCreated!==undefined){
    appendElement({ api: "browser.downloads.onCreated.addListener", value: (supported && browser.downloads.onCreated.addListener!==undefined)});
    appendElement({ api: "browser.downloads.onCreated.removeListener", value: (supported && browser.downloads.onCreated.removeListener!==undefined)});
    appendElement({ api: "browser.downloads.onCreated.hasListener", value: (supported && browser.downloads.onCreated.hasListener!==undefined)});
  } else {
    console.log('downloads.onCreated undefined')
  }

  console.log('downloads.onErased')
  if(supported && browser.downloads.onErased!==undefined){
    appendElement({ api: "browser.downloads.onErased.addListener", value: (supported && browser.downloads.onErased.addListener!==undefined)});
    appendElement({ api: "browser.downloads.onErased.removeListener", value: (supported && browser.downloads.onErased.removeListener!==undefined)});
    appendElement({ api: "browser.downloads.onErased.hasListener", value: (supported && browser.downloads.onErased.hasListener!==undefined)});
  } else {
    console.log('downloads.onErased undefined')
  }

  console.log('downloads.onChanged')
  if(supported && browser.downloads.onChanged!==undefined){
    appendElement({ api: "browser.downloads.onChanged.addListener", value: (supported && browser.downloads.onChanged.addListener!==undefined)});
    appendElement({ api: "browser.downloads.onChanged.removeListener", value: (supported && browser.downloads.onChanged.removeListener!==undefined)});
    appendElement({ api: "browser.downloads.onChanged.hasListener", value: (supported && browser.downloads.onChanged.hasListener!==undefined)});
  } else {
    console.log('downloads.onChanged undefined')
  }
  console.log('downloads done')

  /**
   * events
   */
  console.log('events only hold Event Types')

  /**
   * extension
   */
  console.log('extension start')
  supported = browser.extension!==undefined
  appendHeading('Extension')

  console.log('extension properties')
  appendElement({ api: "browser.extension.lastError", value: (supported && browser.extension.lastError!==undefined)});
  appendElement({ api: "browser.extension.inIncognitoContext", value: (supported && browser.extension.inIncognitoContext!==undefined)});
  
  console.log('extension functions')
  appendElement({ api: "browser.extension.getURL", value: (supported && browser.extension.getURL!==undefined)});
  appendElement({ api: "browser.extension.getViews", value: (supported && browser.extension.getViews!==undefined)});
  appendElement({ api: "browser.extension.getBackgroundPage", value: (supported && browser.extension.getBackgroundPage!==undefined)});
  appendElement({ api: "browser.extension.isAllowedIncognitoAccess", value: (supported && browser.extension.isAllowedIncognitoAccess!==undefined)});
  appendElement({ api: "browser.extension.isAllowedFileSchemeAccess", value: (supported && browser.extension.isAllowedFileSchemeAccess!==undefined)});
  appendElement({ api: "browser.extension.setUpdateUrlData", value: (supported && browser.extension.setUpdateUrlData!==undefined)});

  console.log('extension.onRequest')
  if(supported && browser.extension.onRequest!==undefined){
    appendElement({ api: "browser.extension.onRequest.addListener", value: (supported && browser.extension.onRequest.addListener!==undefined)});
    appendElement({ api: "browser.extension.onRequest.removeListener", value: (supported && browser.extension.onRequest.removeListener!==undefined)});
    appendElement({ api: "browser.extension.onRequest.hasListener", value: (supported && browser.extension.onRequest.hasListener!==undefined)});
  } else {
    console.log('extension.onRequest undefined')
  }

  console.log('extension.onRequestExternal')
  if(supported && browser.extension.onRequestExternal!==undefined){
    appendElement({ api: "browser.extension.onRequestExternal.addListener", value: (supported && browser.extension.onRequestExternal.addListener!==undefined)});
    appendElement({ api: "browser.extension.onRequestExternal.removeListener", value: (supported && browser.extension.onRequestExternal.removeListener!==undefined)});
    appendElement({ api: "browser.extension.onRequestExternal.hasListener", value: (supported && browser.extension.onRequestExternal.hasListener!==undefined)});
  } else {
    console.log('extension.onRequestExternal undefined')
  }
  console.log('extension done')

  /**
   * extensionTypes
   */
  console.log('only common API Types')

  /**
   * history
   */
  console.log('history start')
  supported = browser.history!==undefined
  appendHeading('History')

  console.log('history functions')
  
  appendElement({ api: "browser.history.search", value: (supported && browser.history.search!==undefined)});
  appendElement({ api: "browser.history.getVisits", value: (supported && browser.history.getVisits!==undefined)});
  appendElement({ api: "browser.history.addUrl", value: (supported && browser.history.addUrl!==undefined)});
  appendElement({ api: "browser.history.deleteUrl", value: (supported && browser.history.deleteUrl!==undefined)});
  appendElement({ api: "browser.history.deleteRange", value: (supported && browser.history.deleteRange!==undefined)});
  appendElement({ api: "browser.history.deleteAll", value: (supported && browser.history.deleteAll!==undefined)});

  console.log('history.onVisited')
  if(supported && browser.history.onVisited!==undefined){
    appendElement({ api: "browser.history.onVisited.addListener", value: (supported && browser.history.onVisited.addListener!==undefined)});
    appendElement({ api: "browser.history.onVisited.removeListener", value: (supported && browser.history.onVisited.removeListener!==undefined)});
    appendElement({ api: "browser.history.onVisited.hasListener", value: (supported && browser.history.onVisited.hasListener!==undefined)});
  } else {
    console.log('history.onVisited undefined')
  }

  console.log('history.onVisitRemoved')
  if(supported && browser.history.onVisitRemoved!==undefined){
    appendElement({ api: "browser.history.onVisitRemoved.addListener", value: (supported && browser.history.onVisitRemoved.addListener!==undefined)});
    appendElement({ api: "browser.history.onVisitRemoved.removeListener", value: (supported && browser.history.onVisitRemoved.removeListener!==undefined)});
    appendElement({ api: "browser.history.onVisitRemoved.hasListener", value: (supported && browser.history.onVisitRemoved.hasListener!==undefined)});
  } else {
    console.log('history.onVisitRemoved undefined')
  }
  console.log('history done')

  /**
   * i18n
   */
  console.log('i18n start')
  supported = browser.i18n!==undefined
  appendHeading('I18n')

  console.log('i18n functions')
  
  appendElement({ api: "browser.i18n.getAcceptLanguages", value: (supported && browser.i18n.getAcceptLanguages!==undefined)});
  appendElement({ api: "browser.i18n.getMessage", value: (supported && browser.i18n.getMessage!==undefined)});
  appendElement({ api: "browser.i18n.getUILanguage", value: (supported && browser.i18n.getUILanguage!==undefined)});
  appendElement({ api: "browser.i18n.detectLanguage", value: (supported && browser.i18n.detectLanguage!==undefined)});
  console.log('i18n done')

  /**
   * identity
   */
  console.log('identity start')
  supported = browser.identity!==undefined
  appendHeading('Identity')

  console.log('identity functions')
  
  appendElement({ api: "browser.identity.getRedirectURL", value: (supported && browser.identity.getRedirectURL!==undefined)});
  appendElement({ api: "browser.identity.launchWebAuthFlow", value: (supported && browser.identity.launchWebAuthFlow!==undefined)});
  console.log('identity done')

  /**
   * idle
   */
  console.log('idle start')
  supported = browser.idle!==undefined
  appendHeading('Idle')

  console.log('idle functions')
  
  appendElement({ api: "browser.idle.queryState", value: (supported && browser.idle.queryState!==undefined)});
  appendElement({ api: "browser.idle.setDetectionInterval", value: (supported && browser.idle.setDetectionInterval!==undefined)});

  console.log('idle.onStateChanged')
  if(supported && browser.idle.onStateChanged!==undefined){
    appendElement({ api: "browser.idle.onStateChanged.addListener", value: (supported && browser.idle.onStateChanged.addListener!==undefined)});
    appendElement({ api: "browser.idle.onStateChanged.removeListener", value: (supported && browser.idle.onStateChanged.removeListener!==undefined)});
    appendElement({ api: "browser.idle.onStateChanged.hasListener", value: (supported && browser.idle.onStateChanged.hasListener!==undefined)});
  } else {
    console.log('idle.onStateChanged undefined')
  }
  console.log('idle done')

  /**
   * management
   */
  console.log('management start')
  supported = browser.management!==undefined
  appendHeading('Management')

  console.log('management functions')
  
  appendElement({ api: "browser.management.getAll", value: (supported && browser.management.getAll!==undefined)});
  appendElement({ api: "browser.management.get", value: (supported && browser.management.get!==undefined)});
  appendElement({ api: "browser.management.getSelf", value: (supported && browser.management.getSelf!==undefined)});
  appendElement({ api: "browser.management.uninstall", value: (supported && browser.management.uninstall!==undefined)});
  appendElement({ api: "browser.management.uninstallSelf", value: (supported && browser.management.uninstallSelf!==undefined)});
  appendElement({ api: "browser.management.getPermissionWarningsById", value: (supported && browser.management.getPermissionWarningsById!==undefined)});
  appendElement({ api: "browser.management.getPermissionWarningsByManifest", value: (supported && browser.management.getPermissionWarningsByManifest!==undefined)});
  appendElement({ api: "browser.management.setEnabled", value: (supported && browser.management.setEnabled!==undefined)});

  console.log('management.onInstalled')
  if(supported && browser.management.onInstalled!==undefined){
    appendElement({ api: "browser.management.onInstalled.addListener", value: (supported && browser.management.onInstalled.addListener!==undefined)});
    appendElement({ api: "browser.management.onInstalled.removeListener", value: (supported && browser.management.onInstalled.removeListener!==undefined)});
    appendElement({ api: "browser.management.onInstalled.hasListener", value: (supported && browser.management.onInstalled.hasListener!==undefined)});
  } else {
    console.log('management.onInstalled undefined')
  }

  console.log('management.onUninstalled')
  if(supported && browser.management.onUninstalled!==undefined){
    appendElement({ api: "browser.management.onUninstalled.addListener", value: (supported && browser.management.onUninstalled.addListener!==undefined)});
    appendElement({ api: "browser.management.onUninstalled.removeListener", value: (supported && browser.management.onUninstalled.removeListener!==undefined)});
    appendElement({ api: "browser.management.onUninstalled.hasListener", value: (supported && browser.management.onUninstalled.hasListener!==undefined)});
  } else {
    console.log('management.onUninstalled undefined')
  }

  console.log('management.onEnabled')
  if(supported && browser.management.onEnabled!==undefined){
    appendElement({ api: "browser.management.onEnabled.addListener", value: (supported && browser.management.onEnabled.addListener!==undefined)});
    appendElement({ api: "browser.management.onEnabled.removeListener", value: (supported && browser.management.onEnabled.removeListener!==undefined)});
    appendElement({ api: "browser.management.onEnabled.hasListener", value: (supported && browser.management.onEnabled.hasListener!==undefined)});
  } else {
    console.log('management.onEnabled undefined')
  }

  console.log('management.onDisabled')
  if(supported && browser.management.onDisabled!==undefined){
    appendElement({ api: "browser.management.onDisabled.addListener", value: (supported && browser.management.onDisabled.addListener!==undefined)});
    appendElement({ api: "browser.management.onDisabled.removeListener", value: (supported && browser.management.onDisabled.removeListener!==undefined)});
    appendElement({ api: "browser.management.onDisabled.hasListener", value: (supported && browser.management.onDisabled.hasListener!==undefined)});
  } else {
    console.log('management.onDisabled undefined')
  }
  console.log('management done')

  /**
   * notifications
   */
  console.log('notifications start')
  supported = browser.notifications!==undefined
  appendHeading('Notifications')

  console.log('notifications functions')
  
  appendElement({ api: "browser.notifications.create", value: (supported && browser.notifications.create!==undefined)});
  appendElement({ api: "browser.notifications.update", value: (supported && browser.notifications.update!==undefined)});
  appendElement({ api: "browser.notifications.clear", value: (supported && browser.notifications.clear!==undefined)});
  appendElement({ api: "browser.notifications.getAll", value: (supported && browser.notifications.getAll!==undefined)});

  console.log('notifications.onClosed')
  if(supported && browser.notifications.onClosed!==undefined){
    appendElement({ api: "browser.notifications.onClosed.addListener", value: (supported && browser.notifications.onClosed.addListener!==undefined)});
    appendElement({ api: "browser.notifications.onClosed.removeListener", value: (supported && browser.notifications.onClosed.removeListener!==undefined)});
    appendElement({ api: "browser.notifications.onClosed.hasListener", value: (supported && browser.notifications.onClosed.hasListener!==undefined)});
  } else {
    console.log('notifications.onClosed undefined')
  }

  console.log('notifications.onClicked')
  if(supported && browser.notifications.onClicked!==undefined){
    appendElement({ api: "browser.notifications.onClicked.addListener", value: (supported && browser.notifications.onClicked.addListener!==undefined)});
    appendElement({ api: "browser.notifications.onClicked.removeListener", value: (supported && browser.notifications.onClicked.removeListener!==undefined)});
    appendElement({ api: "browser.notifications.onClicked.hasListener", value: (supported && browser.notifications.onClicked.hasListener!==undefined)});
  } else {
    console.log('notifications.onClicked undefined')
  }

  console.log('notifications.onButtonClicked')
  if(supported && browser.notifications.onButtonClicked!==undefined){
    appendElement({ api: "browser.notifications.onButtonClicked.addListener", value: (supported && browser.notifications.onButtonClicked.addListener!==undefined)});
    appendElement({ api: "browser.notifications.onButtonClicked.removeListener", value: (supported && browser.notifications.onButtonClicked.removeListener!==undefined)});
    appendElement({ api: "browser.notifications.onButtonClicked.hasListener", value: (supported && browser.notifications.onButtonClicked.hasListener!==undefined)});
  } else {
    console.log('notifications.onButtonClicked undefined')
  }
  console.log('notifications done')

  /**
   * omnibox
   */
  console.log('omnibox start')
  supported = browser.omnibox!==undefined
  appendHeading('Omnibox')

  console.log('omnibox functions')
  
  appendElement({ api: "browser.omnibox.setDefaultSuggestion", value: (supported && browser.omnibox.setDefaultSuggestion!==undefined)});

  console.log('omnibox.onInputStarted')
  if(supported && browser.omnibox.onInputStarted!==undefined){
    appendElement({ api: "browser.omnibox.onInputStarted.addListener", value: (supported && browser.omnibox.onInputStarted.addListener!==undefined)});
    appendElement({ api: "browser.omnibox.onInputStarted.removeListener", value: (supported && browser.omnibox.onInputStarted.removeListener!==undefined)});
    appendElement({ api: "browser.omnibox.onInputStarted.hasListener", value: (supported && browser.omnibox.onInputStarted.hasListener!==undefined)});
  } else {
    console.log('omnibox.onInputStarted undefined')
  }

  console.log('omnibox.onInputChanged')
  if(supported && browser.omnibox.onInputChanged!==undefined){
    appendElement({ api: "browser.omnibox.onInputChanged.addListener", value: (supported && browser.omnibox.onInputChanged.addListener!==undefined)});
    appendElement({ api: "browser.omnibox.onInputChanged.removeListener", value: (supported && browser.omnibox.onInputChanged.removeListener!==undefined)});
    appendElement({ api: "browser.omnibox.onInputChanged.hasListener", value: (supported && browser.omnibox.onInputChanged.hasListener!==undefined)});
  } else {
    console.log('omnibox.onInputChanged undefined')
  }

  console.log('omnibox.onInputEntered')
  if(supported && browser.omnibox.onInputEntered!==undefined){
    appendElement({ api: "browser.omnibox.onInputEntered.addListener", value: (supported && browser.omnibox.onInputEntered.addListener!==undefined)});
    appendElement({ api: "browser.omnibox.onInputEntered.removeListener", value: (supported && browser.omnibox.onInputEntered.removeListener!==undefined)});
    appendElement({ api: "browser.omnibox.onInputEntered.hasListener", value: (supported && browser.omnibox.onInputEntered.hasListener!==undefined)});
  } else {
    console.log('omnibox.onInputEntered undefined')
  }

  console.log('omnibox.onInputCancelled')
  if(supported && browser.omnibox.onInputCancelled!==undefined){
    appendElement({ api: "browser.omnibox.onInputCancelled.addListener", value: (supported && browser.omnibox.onInputCancelled.addListener!==undefined)});
    appendElement({ api: "browser.omnibox.onInputCancelled.removeListener", value: (supported && browser.omnibox.onInputCancelled.removeListener!==undefined)});
    appendElement({ api: "browser.omnibox.onInputCancelled.hasListener", value: (supported && browser.omnibox.onInputCancelled.hasListener!==undefined)});
  } else {
    console.log('omnibox.onInputCancelled undefined')
  }
  console.log('omnibox done')

  /**
   * pageAction
   */
  console.log('pageAction start')
  supported = browser.pageAction!==undefined
  appendHeading('PageAction')

  console.log('pageAction functions')
  
  appendElement({ api: "browser.pageAction.show", value: (supported && browser.pageAction.show!==undefined)});
  appendElement({ api: "browser.pageAction.hide", value: (supported && browser.pageAction.hide!==undefined)});
  appendElement({ api: "browser.pageAction.setTitle", value: (supported && browser.pageAction.setTitle!==undefined)});
  appendElement({ api: "browser.pageAction.getTitle", value: (supported && browser.pageAction.getTitle!==undefined)});
  appendElement({ api: "browser.pageAction.setIcon", value: (supported && browser.pageAction.setIcon!==undefined)});
  appendElement({ api: "browser.pageAction.setPopup", value: (supported && browser.pageAction.setPopup!==undefined)});
  appendElement({ api: "browser.pageAction.getPopup", value: (supported && browser.pageAction.getPopup!==undefined)});

  console.log('pageAction.onClicked')
  if(supported && browser.pageAction.onClicked!==undefined){
    appendElement({ api: "browser.pageAction.onClicked.addListener", value: (supported && browser.pageAction.onClicked.addListener!==undefined)});
    appendElement({ api: "browser.pageAction.onClicked.removeListener", value: (supported && browser.pageAction.onClicked.removeListener!==undefined)});
    appendElement({ api: "browser.pageAction.onClicked.hasListener", value: (supported && browser.pageAction.onClicked.hasListener!==undefined)});
  } else {
    console.log('pageAction.onClicked undefined')
  }
  console.log('pageAction done')

  /**
   * privacy
   */
  console.log('privacy start')
  supported = browser.privacy!==undefined
  appendHeading('Privacy')

  console.log('privacy properties')
  appendElement({ api: "browser.privacy.network", value: (supported && browser.privacy.network!==undefined)});
  appendElement({ api: "browser.privacy.websites", value: (supported && browser.privacy.websites!==undefined)});
  console.log('privacy done')

  /**
   * runtime
   */
  console.log('runtime start')
  supported = browser.runtime!==undefined
  appendHeading('Runtime')

  console.log('runtime properties')
  appendElement({ api: "browser.runtime.lastError", value: (supported && browser.runtime.lastError!==undefined)});
  appendElement({ api: "browser.runtime.id", value: (supported && browser.runtime.id!==undefined)});
  
  console.log('runtime functions')
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

  console.log('runtime.onStartup')
  if(supported && browser.runtime.onStartup!==undefined){
    appendElement({ api: "browser.runtime.onStartup.addListener", value: (supported && browser.runtime.onStartup.addListener!==undefined)});
    appendElement({ api: "browser.runtime.onStartup.removeListener", value: (supported && browser.runtime.onStartup.removeListener!==undefined)});
    appendElement({ api: "browser.runtime.onStartup.hasListener", value: (supported && browser.runtime.onStartup.hasListener!==undefined)});
  } else {
    console.log('runtime.onStartup undefined')
  }

  console.log('runtime.onInstalled')
  if(supported && browser.runtime.onInstalled!==undefined){
    appendElement({ api: "browser.runtime.onInstalled.addListener", value: (supported && browser.runtime.onInstalled.addListener!==undefined)});
    appendElement({ api: "browser.runtime.onInstalled.removeListener", value: (supported && browser.runtime.onInstalled.removeListener!==undefined)});
    appendElement({ api: "browser.runtime.onInstalled.hasListener", value: (supported && browser.runtime.onInstalled.hasListener!==undefined)});
  } else {
    console.log('runtime.onInstalled undefined')
  }

  console.log('runtime.onSuspend')
  if(supported && browser.runtime.onSuspend!==undefined){
    appendElement({ api: "browser.runtime.onSuspend.addListener", value: (supported && browser.runtime.onSuspend.addListener!==undefined)});
    appendElement({ api: "browser.runtime.onSuspend.removeListener", value: (supported && browser.runtime.onSuspend.removeListener!==undefined)});
    appendElement({ api: "browser.runtime.onSuspend.hasListener", value: (supported && browser.runtime.onSuspend.hasListener!==undefined)});
  } else {
    console.log('runtime.onSuspend undefined')
  }

  console.log('runtime.onSuspendCanceled')
  if(supported && browser.runtime.onSuspendCanceled!==undefined){
    appendElement({ api: "browser.runtime.onSuspendCanceled.addListener", value: (supported && browser.runtime.onSuspendCanceled.addListener!==undefined)});
    appendElement({ api: "browser.runtime.onSuspendCanceled.removeListener", value: (supported && browser.runtime.onSuspendCanceled.removeListener!==undefined)});
    appendElement({ api: "browser.runtime.onSuspendCanceled.hasListener", value: (supported && browser.runtime.onSuspendCanceled.hasListener!==undefined)});
  } else {
    console.log('runtime.onSuspendCanceled undefined')
  }

  console.log('runtime.onUpdateAvailable')
  if(supported && browser.runtime.onUpdateAvailable!==undefined){
    appendElement({ api: "browser.runtime.onUpdateAvailable.addListener", value: (supported && browser.runtime.onUpdateAvailable.addListener!==undefined)});
    appendElement({ api: "browser.runtime.onUpdateAvailable.removeListener", value: (supported && browser.runtime.onUpdateAvailable.removeListener!==undefined)});
    appendElement({ api: "browser.runtime.onUpdateAvailable.hasListener", value: (supported && browser.runtime.onUpdateAvailable.hasListener!==undefined)});
  } else {
    console.log('runtime.onUpdateAvailable undefined')
  }

  console.log('runtime.onBrowserUpdateAvailable')
  if(supported && browser.runtime.onBrowserUpdateAvailable!==undefined){
    appendElement({ api: "browser.runtime.onBrowserUpdateAvailable.addListener", value: (supported && browser.runtime.onBrowserUpdateAvailable.addListener!==undefined)});
    appendElement({ api: "browser.runtime.onBrowserUpdateAvailable.removeListener", value: (supported && browser.runtime.onBrowserUpdateAvailable.removeListener!==undefined)});
    appendElement({ api: "browser.runtime.onBrowserUpdateAvailable.hasListener", value: (supported && browser.runtime.onBrowserUpdateAvailable.hasListener!==undefined)});
  } else {
    console.log('runtime.onBrowserUpdateAvailable undefined')
  }

  console.log('runtime.onConnect')
  if(supported && browser.runtime.onConnect!==undefined){
    appendElement({ api: "browser.runtime.onConnect.addListener", value: (supported && browser.runtime.onConnect.addListener!==undefined)});
    appendElement({ api: "browser.runtime.onConnect.removeListener", value: (supported && browser.runtime.onConnect.removeListener!==undefined)});
    appendElement({ api: "browser.runtime.onConnect.hasListener", value: (supported && browser.runtime.onConnect.hasListener!==undefined)});
  } else {
    console.log('runtime.onConnect undefined')
  }

  console.log('runtime.onConnectExternal')
  if(supported && browser.runtime.onConnectExternal!==undefined){
    appendElement({ api: "browser.runtime.onConnectExternal.addListener", value: (supported && browser.runtime.onConnectExternal.addListener!==undefined)});
    appendElement({ api: "browser.runtime.onConnectExternal.removeListener", value: (supported && browser.runtime.onConnectExternal.removeListener!==undefined)});
    appendElement({ api: "browser.runtime.onConnectExternal.hasListener", value: (supported && browser.runtime.onConnectExternal.hasListener!==undefined)});
  } else {
    console.log('runtime.onConnectExternal undefined')
  }

  console.log('runtime.onMessage')
  if(supported && browser.runtime.onMessage!==undefined){
    appendElement({ api: "browser.runtime.onMessage.addListener", value: (supported && browser.runtime.onMessage.addListener!==undefined)});
    appendElement({ api: "browser.runtime.onMessage.removeListener", value: (supported && browser.runtime.onMessage.removeListener!==undefined)});
    appendElement({ api: "browser.runtime.onMessage.hasListener", value: (supported && browser.runtime.onMessage.hasListener!==undefined)});
  } else {
    console.log('runtime.onMessage undefined')
  }

  console.log('runtime.onMessageExternal')
  if(supported && browser.runtime.onMessageExternal!==undefined){
    appendElement({ api: "browser.runtime.onMessageExternal.addListener", value: (supported && browser.runtime.onMessageExternal.addListener!==undefined)});
    appendElement({ api: "browser.runtime.onMessageExternal.removeListener", value: (supported && browser.runtime.onMessageExternal.removeListener!==undefined)});
    appendElement({ api: "browser.runtime.onMessageExternal.hasListener", value: (supported && browser.runtime.onMessageExternal.hasListener!==undefined)});
  } else {
    console.log('runtime.onMessageExternal undefined')
  }

  console.log('runtime.onRestartRequired')
  if(supported && browser.runtime.onRestartRequired!==undefined){
    appendElement({ api: "browser.runtime.onRestartRequired.addListener", value: (supported && browser.runtime.onRestartRequired.addListener!==undefined)});
    appendElement({ api: "browser.runtime.onRestartRequired.removeListener", value: (supported && browser.runtime.onRestartRequired.removeListener!==undefined)});
    appendElement({ api: "browser.runtime.onRestartRequired.hasListener", value: (supported && browser.runtime.onRestartRequired.hasListener!==undefined)});
  } else {
    console.log('runtime.onRestartRequired undefined')
  }
  console.log('runtime done')

  /**
   * sessions
   */
  console.log('sessions start')
  supported = browser.sessions!==undefined
  appendHeading('Sessions')

  console.log('sessions properties')
  appendElement({ api: "browser.sessions.MAX_SESSION_RESULTS", value: (supported && browser.sessions.MAX_SESSION_RESULTS!==undefined)});
  
  console.log('sessions functions')
  appendElement({ api: "browser.sessions.getRecentlyClosed", value: (supported && browser.sessions.getRecentlyClosed!==undefined)});
  appendElement({ api: "browser.sessions.restore", value: (supported && browser.sessions.restore!==undefined)});

  console.log('sessions.onChanged')
  if(supported && browser.sessions.onChanged!==undefined){
    appendElement({ api: "browser.sessions.onChanged.addListener", value: (supported && browser.sessions.onChanged.addListener!==undefined)});
    appendElement({ api: "browser.sessions.onChanged.removeListener", value: (supported && browser.sessions.onChanged.removeListener!==undefined)});
    appendElement({ api: "browser.sessions.onChanged.hasListener", value: (supported && browser.sessions.onChanged.hasListener!==undefined)});
  } else {
    console.log('sessions.onChanged undefined')
  }
  console.log('sessions done')

  /**
   * sidebarAction
   */
  console.log('sidebarAction start')
  supported = browser.sidebarAction!==undefined
  appendHeading('SidebarAction')

  console.log('sidebarAction functions')
  appendElement({ api: "browser.sidebarAction.setPanel", value: (supported && browser.sidebarAction.setPanel!==undefined)});
  appendElement({ api: "browser.sidebarAction.getPanel", value: (supported && browser.sidebarAction.getPanel!==undefined)});
  appendElement({ api: "browser.sidebarAction.setTitle", value: (supported && browser.sidebarAction.setTitle!==undefined)});
  appendElement({ api: "browser.sidebarAction.getTitle", value: (supported && browser.sidebarAction.getTitle!==undefined)});
  appendElement({ api: "browser.sidebarAction.setIcon", value: (supported && browser.sidebarAction.setIcon!==undefined)});
  console.log('sidebarAction done')

  /**
   * storage
   */
  console.log('storage start')
  supported = browser.storage!==undefined
  appendHeading('Storage')

  console.log('storage properties')
  appendElement({ api: "browser.storage.sync", value: (supported && browser.storage.sync!==undefined)});
  appendElement({ api: "browser.storage.local", value: (supported && browser.storage.local!==undefined)});
  appendElement({ api: "browser.storage.managed", value: (supported && browser.storage.managed!==undefined)});

  console.log('storage.onChanged')
  if(supported && browser.storage.onChanged!==undefined){
    appendElement({ api: "browser.storage.onChanged.addListener", value: (supported && browser.storage.onChanged.addListener!==undefined)});
    appendElement({ api: "browser.storage.onChanged.removeListener", value: (supported && browser.storage.onChanged.removeListener!==undefined)});
    appendElement({ api: "browser.storage.onChanged.hasListener", value: (supported && browser.storage.onChanged.hasListener!==undefined)});
  } else {
    console.log('storage.onChanged undefined')
  }
  console.log('storage done')

  /**
   * tabs
   */
  console.log('tabs start')
  supported = browser.tabs!==undefined
  appendHeading('Tabs')

  console.log('tabs properties')
  appendElement({ api: "browser.tabs.TAB_ID_NONE", value: (supported && browser.tabs.TAB_ID_NONE!==undefined)});
  
  console.log('tabs functions')
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

  console.log('tabs.onActivated')
  if(supported && browser.tabs.onActivated!==undefined){
    appendElement({ api: "browser.tabs.onActivated.addListener", value: (supported && browser.tabs.onActivated.addListener!==undefined)});
    appendElement({ api: "browser.tabs.onActivated.removeListener", value: (supported && browser.tabs.onActivated.removeListener!==undefined)});
    appendElement({ api: "browser.tabs.onActivated.hasListener", value: (supported && browser.tabs.onActivated.hasListener!==undefined)});
  } else {
    console.log('tabs.onActivated undefined')
  }

  console.log('tabs.onActiveChanged')
  if(supported && browser.tabs.onActiveChanged!==undefined){
    appendElement({ api: "browser.tabs.onActiveChanged.addListener", value: (supported && browser.tabs.onActiveChanged.addListener!==undefined)});
    appendElement({ api: "browser.tabs.onActiveChanged.removeListener", value: (supported && browser.tabs.onActiveChanged.removeListener!==undefined)});
    appendElement({ api: "browser.tabs.onActiveChanged.hasListener", value: (supported && browser.tabs.onActiveChanged.hasListener!==undefined)});
  } else {
    console.log('tabs.onActiveChanged undefined')
  }

  console.log('tabs.onAttached')
  if(supported && browser.tabs.onAttached!==undefined){
    appendElement({ api: "browser.tabs.onAttached.addListener", value: (supported && browser.tabs.onAttached.addListener!==undefined)});
    appendElement({ api: "browser.tabs.onAttached.removeListener", value: (supported && browser.tabs.onAttached.removeListener!==undefined)});
    appendElement({ api: "browser.tabs.onAttached.hasListener", value: (supported && browser.tabs.onAttached.hasListener!==undefined)});
  } else {
    console.log('tabs.onAttached undefined')
  }

  console.log('tabs.onCreated')
  if(supported && browser.tabs.onCreated!==undefined){
    appendElement({ api: "browser.tabs.onCreated.addListener", value: (supported && browser.tabs.onCreated.addListener!==undefined)});
    appendElement({ api: "browser.tabs.onCreated.removeListener", value: (supported && browser.tabs.onCreated.removeListener!==undefined)});
    appendElement({ api: "browser.tabs.onCreated.hasListener", value: (supported && browser.tabs.onCreated.hasListener!==undefined)});
  } else {
    console.log('tabs.onCreated undefined')
  }

  console.log('tabs.onDetached')
  if(supported && browser.tabs.onDetached!==undefined){
    appendElement({ api: "browser.tabs.onDetached.addListener", value: (supported && browser.tabs.onDetached.addListener!==undefined)});
    appendElement({ api: "browser.tabs.onDetached.removeListener", value: (supported && browser.tabs.onDetached.removeListener!==undefined)});
    appendElement({ api: "browser.tabs.onDetached.hasListener", value: (supported && browser.tabs.onDetached.hasListener!==undefined)});
  } else {
    console.log('tabs.onDetached undefined')
  }

  console.log('tabs.onHighlightChanged')
  if(supported && browser.tabs.onHighlightChanged!==undefined){
    appendElement({ api: "browser.tabs.onHighlightChanged.addListener", value: (supported && browser.tabs.onHighlightChanged.addListener!==undefined)});
    appendElement({ api: "browser.tabs.onHighlightChanged.removeListener", value: (supported && browser.tabs.onHighlightChanged.removeListener!==undefined)});
    appendElement({ api: "browser.tabs.onHighlightChanged.hasListener", value: (supported && browser.tabs.onHighlightChanged.hasListener!==undefined)});
  } else {
    console.log('tabs.onHighlightChanged undefined')
  }

  console.log('tabs.onHighlighted')
  if(supported && browser.tabs.onHighlighted!==undefined){
    appendElement({ api: "browser.tabs.onHighlighted.addListener", value: (supported && browser.tabs.onHighlighted.addListener!==undefined)});
    appendElement({ api: "browser.tabs.onHighlighted.removeListener", value: (supported && browser.tabs.onHighlighted.removeListener!==undefined)});
    appendElement({ api: "browser.tabs.onHighlighted.hasListener", value: (supported && browser.tabs.onHighlighted.hasListener!==undefined)});
  } else {
    console.log('tabs.onHighlighted undefined')
  }

  console.log('tabs.onMoved')
  if(supported && browser.tabs.onMoved!==undefined){
    appendElement({ api: "browser.tabs.onMoved.addListener", value: (supported && browser.tabs.onMoved.addListener!==undefined)});
    appendElement({ api: "browser.tabs.onMoved.removeListener", value: (supported && browser.tabs.onMoved.removeListener!==undefined)});
    appendElement({ api: "browser.tabs.onMoved.hasListener", value: (supported && browser.tabs.onMoved.hasListener!==undefined)});
  } else {
    console.log('tabs.onMoved undefined')
  }

  console.log('tabs.onRemoved')
  if(supported && browser.tabs.onRemoved!==undefined){
    appendElement({ api: "browser.tabs.onRemoved.addListener", value: (supported && browser.tabs.onRemoved.addListener!==undefined)});
    appendElement({ api: "browser.tabs.onRemoved.removeListener", value: (supported && browser.tabs.onRemoved.removeListener!==undefined)});
    appendElement({ api: "browser.tabs.onRemoved.hasListener", value: (supported && browser.tabs.onRemoved.hasListener!==undefined)});
  } else {
    console.log('tabs.onRemoved undefined')
  }

  console.log('tabs.onReplaced')
  if(supported && browser.tabs.onReplaced!==undefined){
    appendElement({ api: "browser.tabs.onReplaced.addListener", value: (supported && browser.tabs.onReplaced.addListener!==undefined)});
    appendElement({ api: "browser.tabs.onReplaced.removeListener", value: (supported && browser.tabs.onReplaced.removeListener!==undefined)});
    appendElement({ api: "browser.tabs.onReplaced.hasListener", value: (supported && browser.tabs.onReplaced.hasListener!==undefined)});
  } else {
    console.log('tabs.onReplaced undefined')
  }

  console.log('tabs.onSelectionChanged')
  if(supported && browser.tabs.onSelectionChanged!==undefined){
    appendElement({ api: "browser.tabs.onSelectionChanged.addListener", value: (supported && browser.tabs.onSelectionChanged.addListener!==undefined)});
    appendElement({ api: "browser.tabs.onSelectionChanged.removeListener", value: (supported && browser.tabs.onSelectionChanged.removeListener!==undefined)});
    appendElement({ api: "browser.tabs.onSelectionChanged.hasListener", value: (supported && browser.tabs.onSelectionChanged.hasListener!==undefined)});
  } else {
    console.log('tabs.onSelectionChanged undefined')
  }

  console.log('tabs.onUpdated')
  if(supported && browser.tabs.onUpdated!==undefined){
    appendElement({ api: "browser.tabs.onUpdated.addListener", value: (supported && browser.tabs.onUpdated.addListener!==undefined)});
    appendElement({ api: "browser.tabs.onUpdated.removeListener", value: (supported && browser.tabs.onUpdated.removeListener!==undefined)});
    appendElement({ api: "browser.tabs.onUpdated.hasListener", value: (supported && browser.tabs.onUpdated.hasListener!==undefined)});
  } else {
    console.log('tabs.onUpdated undefined')
  }

  console.log('tabs.onZoomChange')
  if(supported && browser.tabs.onZoomChange!==undefined){
    appendElement({ api: "browser.tabs.onZoomChange.addListener", value: (supported && browser.tabs.onZoomChange.addListener!==undefined)});
    appendElement({ api: "browser.tabs.onZoomChange.removeListener", value: (supported && browser.tabs.onZoomChange.removeListener!==undefined)});
    appendElement({ api: "browser.tabs.onZoomChange.hasListener", value: (supported && browser.tabs.onZoomChange.hasListener!==undefined)});
  } else {
    console.log('tabs.onZoomChange undefined')
  }
  console.log('tabs done')

  /**
   * topSites
   */
  console.log('topSites start')
  supported = browser.topSites!==undefined
  appendHeading('TopSites')

  console.log('topSites functions')
  appendElement({ api: "browser.topSites.get", value: (supported && browser.topSites.get!==undefined)});
  console.log('topSites done')

  /**
   * webNavigation
   */
  console.log('webNavigation start')
  supported = browser.webNavigation!==undefined
  appendHeading('WebNavigation')

  console.log('tabs functions')
  appendElement({ api: "browser.webNavigation.getFrame", value: (supported && browser.webNavigation.getFrame!==undefined)});
  appendElement({ api: "browser.webNavigation.getAllFrames", value: (supported && browser.webNavigation.getAllFrames!==undefined)});

  console.log('webNavigation.onBeforeNavigate')
  if(supported && browser.webNavigation.onBeforeNavigate!==undefined){
    appendElement({ api: "browser.webNavigation.onBeforeNavigate.addListener", value: (supported && browser.webNavigation.onBeforeNavigate.addListener!==undefined)});
    appendElement({ api: "browser.webNavigation.onBeforeNavigate.removeListener", value: (supported && browser.webNavigation.onBeforeNavigate.removeListener!==undefined)});
    appendElement({ api: "browser.webNavigation.onBeforeNavigate.hasListener", value: (supported && browser.webNavigation.onBeforeNavigate.hasListener!==undefined)});
  } else {
    console.log('webNavigation.onBeforeNavigate undefined')
  }

  console.log('webNavigation.onCommitted')
  if(supported && browser.webNavigation.onCommitted!==undefined){
    appendElement({ api: "browser.webNavigation.onCommitted.addListener", value: (supported && browser.webNavigation.onCommitted.addListener!==undefined)});
    appendElement({ api: "browser.webNavigation.onCommitted.removeListener", value: (supported && browser.webNavigation.onCommitted.removeListener!==undefined)});
    appendElement({ api: "browser.webNavigation.onCommitted.hasListener", value: (supported && browser.webNavigation.onCommitted.hasListener!==undefined)});
  } else {
    console.log('webNavigation.onCommitted undefined')
  }

  console.log('webNavigation.onDOMContentLoaded')
  if(supported && browser.webNavigation.onDOMContentLoaded!==undefined){
    appendElement({ api: "browser.webNavigation.onDOMContentLoaded.addListener", value: (supported && browser.webNavigation.onDOMContentLoaded.addListener!==undefined)});
    appendElement({ api: "browser.webNavigation.onDOMContentLoaded.removeListener", value: (supported && browser.webNavigation.onDOMContentLoaded.removeListener!==undefined)});
    appendElement({ api: "browser.webNavigation.onDOMContentLoaded.hasListener", value: (supported && browser.webNavigation.onDOMContentLoaded.hasListener!==undefined)});
  } else {
    console.log('webNavigation.onDOMContentLoaded undefined')
  }

  console.log('webNavigation.onCompleted')
  if(supported && browser.webNavigation.onCompleted!==undefined){
    appendElement({ api: "browser.webNavigation.onCompleted.addListener", value: (supported && browser.webNavigation.onCompleted.addListener!==undefined)});
    appendElement({ api: "browser.webNavigation.onCompleted.removeListener", value: (supported && browser.webNavigation.onCompleted.removeListener!==undefined)});
    appendElement({ api: "browser.webNavigation.onCompleted.hasListener", value: (supported && browser.webNavigation.onCompleted.hasListener!==undefined)});
  } else {
    console.log('webNavigation.onCompleted undefined')
  }

  console.log('webNavigation.onErrorOccurred')
  if(supported && browser.webNavigation.onErrorOccurred!==undefined){
    appendElement({ api: "browser.webNavigation.onErrorOccurred.addListener", value: (supported && browser.webNavigation.onErrorOccurred.addListener!==undefined)});
    appendElement({ api: "browser.webNavigation.onErrorOccurred.removeListener", value: (supported && browser.webNavigation.onErrorOccurred.removeListener!==undefined)});
    appendElement({ api: "browser.webNavigation.onErrorOccurred.hasListener", value: (supported && browser.webNavigation.onErrorOccurred.hasListener!==undefined)});
  } else {
    console.log('webNavigation.onErrorOccurred undefined')
  }

  console.log('webNavigation.onCreatedNavigationTarget')
  if(supported && browser.webNavigation.onCreatedNavigationTarget!==undefined){
    appendElement({ api: "browser.webNavigation.onCreatedNavigationTarget.addListener", value: (supported && browser.webNavigation.onCreatedNavigationTarget.addListener!==undefined)});
    appendElement({ api: "browser.webNavigation.onCreatedNavigationTarget.removeListener", value: (supported && browser.webNavigation.onCreatedNavigationTarget.removeListener!==undefined)});
    appendElement({ api: "browser.webNavigation.onCreatedNavigationTarget.hasListener", value: (supported && browser.webNavigation.onCreatedNavigationTarget.hasListener!==undefined)});
  } else {
    console.log('webNavigation.onCreatedNavigationTarget undefined')
  }

  console.log('webNavigation.onReferenceFragmentUpdated')
  if(supported && browser.webNavigation.onReferenceFragmentUpdated!==undefined){
    appendElement({ api: "browser.webNavigation.onReferenceFragmentUpdated.addListener", value: (supported && browser.webNavigation.onReferenceFragmentUpdated.addListener!==undefined)});
    appendElement({ api: "browser.webNavigation.onReferenceFragmentUpdated.removeListener", value: (supported && browser.webNavigation.onReferenceFragmentUpdated.removeListener!==undefined)});
    appendElement({ api: "browser.webNavigation.onReferenceFragmentUpdated.hasListener", value: (supported && browser.webNavigation.onReferenceFragmentUpdated.hasListener!==undefined)});
  } else {
    console.log('webNavigation.onReferenceFragmentUpdated undefined')
  }

  console.log('webNavigation.onTabReplaced')
  if(supported && browser.webNavigation.onTabReplaced!==undefined){
    appendElement({ api: "browser.webNavigation.onTabReplaced.addListener", value: (supported && browser.webNavigation.onTabReplaced.addListener!==undefined)});
    appendElement({ api: "browser.webNavigation.onTabReplaced.removeListener", value: (supported && browser.webNavigation.onTabReplaced.removeListener!==undefined)});
    appendElement({ api: "browser.webNavigation.onTabReplaced.hasListener", value: (supported && browser.webNavigation.onTabReplaced.hasListener!==undefined)});
  } else {
    console.log('webNavigation.onTabReplaced undefined')
  }

  console.log('webNavigation.onHistoryStateUpdated')
  if(supported && browser.webNavigation.onHistoryStateUpdated!==undefined){
    appendElement({ api: "browser.webNavigation.onHistoryStateUpdated.addListener", value: (supported && browser.webNavigation.onHistoryStateUpdated.addListener!==undefined)});
    appendElement({ api: "browser.webNavigation.onHistoryStateUpdated.removeListener", value: (supported && browser.webNavigation.onHistoryStateUpdated.removeListener!==undefined)});
    appendElement({ api: "browser.webNavigation.onHistoryStateUpdated.hasListener", value: (supported && browser.webNavigation.onHistoryStateUpdated.hasListener!==undefined)});
  } else {
    console.log('webNavigation.onHistoryStateUpdated undefined')
  }
  console.log('webNavigation done')

  /**
   * webRequest
   */
  console.log('webRequest start')
  supported = browser.webRequest!==undefined
  appendHeading('WebRequest')

  console.log('webRequest properties')
  appendElement({ api: "browser.webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES", value: (supported && browser.webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES!==undefined)});
  
  console.log('webRequest functions')
  appendElement({ api: "browser.webRequest.handlerBehaviorChanged", value: (supported && browser.webRequest.handlerBehaviorChanged!==undefined)});

  console.log('webRequest.onBeforeRequest')
  if(supported && browser.webRequest.onBeforeRequest!==undefined){
    appendElement({ api: "browser.webRequest.onBeforeRequest.addListener", value: (supported && browser.webRequest.onBeforeRequest.addListener!==undefined)});
    appendElement({ api: "browser.webRequest.onBeforeRequest.removeListener", value: (supported && browser.webRequest.onBeforeRequest.removeListener!==undefined)});
    appendElement({ api: "browser.webRequest.onBeforeRequest.hasListener", value: (supported && browser.webRequest.onBeforeRequest.hasListener!==undefined)});
  } else {
    console.log('webRequest.onBeforeRequest undefined')
  }

  console.log('webRequest.onBeforeSendHeaders')
  if(supported && browser.webRequest.onBeforeSendHeaders!==undefined){
    appendElement({ api: "browser.webRequest.onBeforeSendHeaders.addListener", value: (supported && browser.webRequest.onBeforeSendHeaders.addListener!==undefined)});
    appendElement({ api: "browser.webRequest.onBeforeSendHeaders.removeListener", value: (supported && browser.webRequest.onBeforeSendHeaders.removeListener!==undefined)});
    appendElement({ api: "browser.webRequest.onBeforeSendHeaders.hasListener", value: (supported && browser.webRequest.onBeforeSendHeaders.hasListener!==undefined)});
  } else {
    console.log('webRequest.onBeforeSendHeaders undefined')
  }

  console.log('webRequest.onSendHeaders')
  if(supported && browser.webRequest.onSendHeaders!==undefined){
    appendElement({ api: "browser.webRequest.onSendHeaders.addListener", value: (supported && browser.webRequest.onSendHeaders.addListener!==undefined)});
    appendElement({ api: "browser.webRequest.onSendHeaders.removeListener", value: (supported && browser.webRequest.onSendHeaders.removeListener!==undefined)});
    appendElement({ api: "browser.webRequest.onSendHeaders.hasListener", value: (supported && browser.webRequest.onSendHeaders.hasListener!==undefined)});
  } else {
    console.log('webRequest.onSendHeaders undefined')
  }

  console.log('webRequest.onHeadersReceived')
  if(supported && browser.webRequest.onHeadersReceived!==undefined){
    appendElement({ api: "browser.webRequest.onHeadersReceived.addListener", value: (supported && browser.webRequest.onHeadersReceived.addListener!==undefined)});
    appendElement({ api: "browser.webRequest.onHeadersReceived.removeListener", value: (supported && browser.webRequest.onHeadersReceived.removeListener!==undefined)});
    appendElement({ api: "browser.webRequest.onHeadersReceived.hasListener", value: (supported && browser.webRequest.onHeadersReceived.hasListener!==undefined)});
  } else {
    console.log('webRequest.onHeadersReceived undefined')
  }

  console.log('webRequest.onAuthRequired')
  if(supported && browser.webRequest.onAuthRequired!==undefined){
    appendElement({ api: "browser.webRequest.onAuthRequired.addListener", value: (supported && browser.webRequest.onAuthRequired.addListener!==undefined)});
    appendElement({ api: "browser.webRequest.onAuthRequired.removeListener", value: (supported && browser.webRequest.onAuthRequired.removeListener!==undefined)});
    appendElement({ api: "browser.webRequest.onAuthRequired.hasListener", value: (supported && browser.webRequest.onAuthRequired.hasListener!==undefined)});
  } else {
    console.log('webRequest.onAuthRequired undefined')
  }

  console.log('webRequest.onResponseStarted')
  if(supported && browser.webRequest.onResponseStarted!==undefined){
    appendElement({ api: "browser.webRequest.onResponseStarted.addListener", value: (supported && browser.webRequest.onResponseStarted.addListener!==undefined)});
    appendElement({ api: "browser.webRequest.onResponseStarted.removeListener", value: (supported && browser.webRequest.onResponseStarted.removeListener!==undefined)});
    appendElement({ api: "browser.webRequest.onResponseStarted.hasListener", value: (supported && browser.webRequest.onResponseStarted.hasListener!==undefined)});
  } else {
    console.log('webRequest.onResponseStarted undefined')
  }

  console.log('webRequest.onBeforeRedirect')
  if(supported && browser.webRequest.onBeforeRedirect!==undefined){
    appendElement({ api: "browser.webRequest.onBeforeRedirect.addListener", value: (supported && browser.webRequest.onBeforeRedirect.addListener!==undefined)});
    appendElement({ api: "browser.webRequest.onBeforeRedirect.removeListener", value: (supported && browser.webRequest.onBeforeRedirect.removeListener!==undefined)});
    appendElement({ api: "browser.webRequest.onBeforeRedirect.hasListener", value: (supported && browser.webRequest.onBeforeRedirect.hasListener!==undefined)});
  } else {
    console.log('webRequest.onBeforeRedirect undefined')
  }

  console.log('webRequest.onCompleted')
  if(supported && browser.webRequest.onCompleted!==undefined){
    appendElement({ api: "browser.webRequest.onCompleted.addListener", value: (supported && browser.webRequest.onCompleted.addListener!==undefined)});
    appendElement({ api: "browser.webRequest.onCompleted.removeListener", value: (supported && browser.webRequest.onCompleted.removeListener!==undefined)});
    appendElement({ api: "browser.webRequest.onCompleted.hasListener", value: (supported && browser.webRequest.onCompleted.hasListener!==undefined)});
  } else {
    console.log('webRequest.onCompleted undefined')
  }

  console.log('webRequest.onErrorOccurred')
  if(supported && browser.webRequest.onErrorOccurred!==undefined){
    appendElement({ api: "browser.webRequest.onErrorOccurred.addListener", value: (supported && browser.webRequest.onErrorOccurred.addListener!==undefined)});
    appendElement({ api: "browser.webRequest.onErrorOccurred.removeListener", value: (supported && browser.webRequest.onErrorOccurred.removeListener!==undefined)});
    appendElement({ api: "browser.webRequest.onErrorOccurred.hasListener", value: (supported && browser.webRequest.onErrorOccurred.hasListener!==undefined)});
  } else {
    console.log('webRequest.onErrorOccurred undefined')
  }
  console.log('webRequest done')

  /**
   * windows
   */
  console.log('windows start')
  supported = browser.windows!==undefined
  appendHeading('Windows')

  console.log('windows properties')
  appendElement({ api: "browser.windows.WINDOW_ID_NONE", value: (supported && browser.windows.WINDOW_ID_NONE!==undefined)});
  appendElement({ api: "browser.windows.WINDOW_ID_CURRENT", value: (supported && browser.windows.WINDOW_ID_CURRENT!==undefined)});
  
  console.log('windows functions')
  appendElement({ api: "browser.windows.get", value: (supported && browser.windows.get!==undefined)});
  appendElement({ api: "browser.windows.getCurrent", value: (supported && browser.windows.getCurrent.get!==undefined)});
  appendElement({ api: "browser.windows.getLastFocused", value: (supported && browser.windows.getLastFocused!==undefined)});
  appendElement({ api: "browser.windows.getAll", value: (supported && browser.windows.getAll!==undefined)});
  appendElement({ api: "browser.windows.create", value: (supported && browser.windows.create!==undefined)});
  appendElement({ api: "browser.windows.update", value: (supported && browser.windows.update!==undefined)});
  appendElement({ api: "browser.windows.remove", value: (supported && browser.windows.remove!==undefined)});

  console.log('windows.onCreated')
  if(supported && browser.windows.onCreated!==undefined){
    appendElement({ api: "browser.windows.onCreated.addListener", value: (supported && browser.windows.onCreated.addListener!==undefined)});
    appendElement({ api: "browser.windows.onCreated.removeListener", value: (supported && browser.windows.onCreated.removeListener!==undefined)});
    appendElement({ api: "browser.windows.onCreated.hasListener", value: (supported && browser.windows.onCreated.hasListener!==undefined)});
  } else {
    console.log('windows.onCreated undefined')
  }

  console.log('windows.onRemoved')
  if(supported && browser.windows.onRemoved!==undefined){
    appendElement({ api: "browser.windows.onRemoved.addListener", value: (supported && browser.windows.onRemoved.addListener!==undefined)});
    appendElement({ api: "browser.windows.onRemoved.removeListener", value: (supported && browser.windows.onRemoved.removeListener!==undefined)});
    appendElement({ api: "browser.windows.onRemoved.hasListener", value: (supported && browser.windows.onRemoved.hasListener!==undefined)});
  } else {
    console.log('windows.onRemoved undefined')
  }

  console.log('windows.onFocusChanged')
  if(supported && browser.windows.onFocusChanged!==undefined){
    appendElement({ api: "browser.windows.onFocusChanged.addListener", value: (supported && browser.windows.onFocusChanged.addListener!==undefined)});
    appendElement({ api: "browser.windows.onFocusChanged.removeListener", value: (supported && browser.windows.onFocusChanged.removeListener!==undefined)});
    appendElement({ api: "browser.windows.onFocusChanged.hasListener", value: (supported && browser.windows.onFocusChanged.hasListener!==undefined)});
  } else {
    console.log('windows.onFocusChanged undefined')
  }
  console.log('windows done')
}