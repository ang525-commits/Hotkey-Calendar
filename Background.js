chrome.commands.onCommand.addListener(async(command) => {
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
  } else if (command === "bookmark") {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });
    if (!tab || !tab.url) {
      console.error("cannot bookmark");
      return;
    }

    if (tab.url.startsWith("chrome://")) {
      console.error("cannot bookmark.");
      return;
    }
    chrome.bookmarks.create({
    title: tab.title || "New Bookmark",
    url: tab.url
    });
  };
 }
