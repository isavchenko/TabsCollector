describe("Tabs collector", function () {

  beforeEach(function () {
    Configuration = {
      getSurvivalInterval: function () {
        return 5000;
      }
    };
  });

  it("checks if tab survived", function () {
    var lastVisit = {visitTime: new Date().getTime() - 6000};
    expect(TabsCollector._tabSurvived(lastVisit)).toBe(false);

    lastVisit = {visitTime: new Date().getTime() - 4000};
    expect(TabsCollector._tabSurvived(lastVisit)).toBe(true);
  });
});
