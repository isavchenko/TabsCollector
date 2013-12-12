var TabsCollector = {
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
    var survivalIntervalStart = new Date().getTime() - Configuration.getSurvivalInterval();
    return lastVisit.visitTime > survivalIntervalStart;
  }
};
