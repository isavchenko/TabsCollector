document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("survivalTime").value = Configuration.getSurvivalInterval();
  document.getElementById("tabsLimit").value = Configuration.getTabsLimit();

  document.querySelector('button').addEventListener('click', function () {
    Configuration.setSurvivalInterval(document.getElementById("survivalTime").value);
    Configuration.setTabsLimit(document.getElementById("tabsLimit").value);
  });
});