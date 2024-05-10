document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  var inputText = document.getElementById("inputTextArea").value;
  var outputText = inputText
    .replace(/[\u202F]/g, " ")
    .replace(/[\u2013]/g, "-")
    .replace(/[^\u0020-\u007E\u00A1-\u00FF\u000D\u000A]/g, "")
    .replace(/[^\d\w\s[À-ü].,]/g, "");
  document.getElementById("outputTextArea").value = outputText;

  document
    .getElementById("inputTextArea")
    .addEventListener("focus", function () {
      document.getElementById("outputTextArea").value = "";
    });
});

document.getElementById("copyButton").addEventListener("click", function () {
  event.preventDefault();

  var outputTextArea = document.getElementById("outputTextArea");
  outputTextArea.select();
  document.execCommand("copy");

  var copyButton = document.getElementById("copyButton");
  copyButton.classList.add("clicked");

  var copiedText = document.getElementById("copiedText");
  copiedText.style.opacity = 1;

  setTimeout(function () {
    copiedText.style.opacity = 0;
  }, 2000);
});
