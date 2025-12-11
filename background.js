chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "vt-search",
    title: "Send to VirusTotal",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "vt-search" && info.selectionText) {
    const query = encodeURIComponent(info.selectionText.trim());
    const vtUrl = `https://www.virustotal.com/gui/search/${query}`;
    chrome.tabs.create({ url: vtUrl });
  }
});
