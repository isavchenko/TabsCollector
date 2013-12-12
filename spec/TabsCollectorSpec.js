describe ("Tabs collector", function () {

  beforeEach (function () {
    chrome = {
      tabs: {

      }
    };
  });

  it ("checks if tab survived", function () {
    TabsCollector.survivalInterval = 5000;
    var lastVisit = {visitTime: new Date().getTime() - 6000};
    expect(TabsCollector._tabSurvived(lastVisit)).toBe(false);

    lastVisit = {visitTime: new Date().getTime() - 4000};
    expect(TabsCollector._tabSurvived(lastVisit)).toBe(true);
  });
});
