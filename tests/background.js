let colour = "#913831";

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ colour });
    console.log('Degault background colour set to %cred', `colour: ${colour}`);
});