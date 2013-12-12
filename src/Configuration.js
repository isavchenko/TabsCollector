var Configuration = {
  getSurvivalInterval: function () {
    return localStorage.getItem("survivalInterval") || 5000;
  },

  setSurvivalInterval: function (survivalInterval) {
    localStorage.setItem("survivalInterval", survivalInterval);
  },

  getTabsLimit: function () {
    return localStorage.getItem("TabsLimit") || 15;
  },

  setTabsLimit: function (tabsLimit) {
    localStorage.setItem("TabsLimit", tabsLimit);
  }
};