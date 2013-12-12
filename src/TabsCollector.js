var TabsCollector = {
  //todo: extract to configuration
  survivalInterval: /*10 * 24 * 60 * 6*/5 * 1000,
  tabsLimit: 15,

  collect: function () {
    chrome.tabs.query({currentWindow: true}, function (tabs) {
      for (var i = 0; i < tabs.length; i++) {
        (function () {
          var tab = tabs[i];
          chrome.history.getVisits({url: tab.url}, function (visits) {
            if (!TabsCollector._tabSurvived(visits[visits.length - 1])) {
              chrome.tabs.remove(tab.id);
            }
          });
        })()
      }
    });
  },

  _tabSurvived: function (lastVisit) {
    var survivalIntervalStart = new Date().getTime() - this.survivalInterval;
    return lastVisit.visitTime > survivalIntervalStart;
  }
};
