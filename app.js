var btnTranslate = document.querySelector("#btn-translate")
var txtInput =document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")
//console.log(outputDiv)
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}
function errorHandler(error){
    console.log("error occoured", error)
    alert("something went wrong")
}

function clickhandler(){
    //outputDiv.innerText="shyam kumar" +txtInput.value
    var inputText = txtInput.value 
    fetch(getTranslationURL(inputText))
    .then(respone => respone.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
        
    })
    .catch(errorHandler)
    //console.log("Clicked")
    //console.log("input", txtInput.value)
}
btnTranslate.addEventListener("click", clickhandler)