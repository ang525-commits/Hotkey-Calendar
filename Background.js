chrome.commands.onCommand.addListener((command,tab) => {
"action": {
      "type": "redirect",
      "redirect": {
         "extensionPath": "https://calendar.google.com/calendar/u/0/r"
      }
    }
}
