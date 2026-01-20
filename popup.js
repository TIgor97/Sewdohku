document.getElementById("launchBtn").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "OPEN_SUDOKU" });
  window.close();
});
