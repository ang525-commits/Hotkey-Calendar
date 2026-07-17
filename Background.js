chrome.commands.onCommand.addListener((command) => {
  if (command === "My Calendar") {
    chrome.tabs.create({
      url: "https://calendar.google.com"
    });
  } elseif (command === "My Email") {
    chrome.tabs.create({
      url: "https://outlook.office.com/mail/"
    });
  }elseif (command === "My Drive") {
    chrome.tabs.create({
      url: "https://drive.google.com"
    });
  }
});

