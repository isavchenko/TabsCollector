var STORAGE_PROPERTIES = {
  STORAGE_NAME: "tabscollector_storage"
};

var TabsInterceptor = {
  onTabCreated: function(tab) {
    chrome.storage.local.get("tabscollector_storage", function (items) {
      var storage = items.tabscollector_storage;
      if(!storage) {
        storage = {}
      }
      storage[tab.id] = {tab: tab, date: new Date().getMilliseconds()};
      chrome.storage.local.set({tabscollector_storage: storage})
    })
  }

  /*onWindowCreated: function (window) {
    chrome.storage.local.get("tabscollector_storage", function (items) {
      if (!items) {
        items = {};
      }
      items[window.id] = {};
      chrome.storage.local.set("tabscollector_storage", items);
    });
  }*/
};