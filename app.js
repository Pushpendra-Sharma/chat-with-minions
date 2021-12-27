var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

console.log(txtInput);

function clickHandler() {
  console.log("clicked!");
  console.log("textarea input: ", txtInput.value);
}

btnTranslate.addEventListener("click", clickHandler);
