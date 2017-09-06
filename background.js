chrome.browserAction.onClicked.addListener(function(tab) {
    if (tab.url === "https://www.instagram.com/") {
        chrome.tabs.executeScript(null, {
            file: "sort.js"
        });
    }
});