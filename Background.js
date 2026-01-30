chrome.commands.onCommand.addListener((command) => {
  if (command === "name-of-command-passed-into-function") {
    chrome.tabs.update({
      url: "https://calendar.google.com/calendar/u/0/r"
    });
  }
});

