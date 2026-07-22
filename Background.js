chrome.commands.onCommand.addListener((command) => {
  if (command === "My Calendar") {
    chrome.tabs.create({
      url: "https://calendar.google.com"
    });
  } else if (command === "My Email") {
    chrome.tabs.create({
      url: "https://outlook.office.com/mail/"
    });
  }else if (command === "My Drive") {
    chrome.tabs.create({
      url: "https://drive.google.com"
    });
  }
   if (command === "bookmark") {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });
    chrome.bookmarks.create({
    title: tab.title || "New Bookmark",
    url: tab.url
    });
  });
