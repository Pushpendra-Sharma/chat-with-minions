var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

//modifying url
function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input;
}

function clickHandler() {
  var inputText = txtInput.value; // taking input from textarea

  // calling server for processing
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText; // output
    });
}

btnTranslate.addEventListener("click", clickHandler);
