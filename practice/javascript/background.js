let color = "#913831";

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Degault background colour set to %cred', `colour: ${color}`);
});