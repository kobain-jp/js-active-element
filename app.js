const  inputElement = document.getElementById("inp");
inputElement.addEventListener("click",logDocumentActiveElement);

const btnElement = document.getElementById("btn");
btnElement.addEventListener("click",logDocumentActiveElement);

const aTag = document.getElementById("atag");
btnElement.addEventListener("click",logDocumentActiveElement);

document.addEventListener("click",logDocumentActiveElement);

function logDocumentActiveElement(e) {
    console.log(document.activeElement);
}

function alertDocumentActiveElement(e) {
    console.log(document.activeElement);
}
    
console.log(document.activeElement);
