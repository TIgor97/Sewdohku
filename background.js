let sudokuWindowId = null;

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action !== "OPEN_SUDOKU") return;

  if (sudokuWindowId !== null) {
    chrome.windows.get(sudokuWindowId, {}, win => {
      if (chrome.runtime.lastError || !win) {
        openSudoku();
      } else {
        chrome.windows.update(sudokuWindowId, { focused: true });
      }
    });
  } else {
    openSudoku();
  }
});

function openSudoku() {
  chrome.windows.create(
    {
      url: chrome.runtime.getURL("sudoku.html"),
      type: "popup",
      width: 450,
      height: 580
    },
    win => {
      sudokuWindowId = win.id;
    }
  );
}
