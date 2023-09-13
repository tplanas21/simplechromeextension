function inputName(){
    
    var nameInput = document.getElementById("name");
    var savedName = nameInput.innerHTML;

    console.log(savedName);
    chrome.storage.sync.set({key: savedName}).then( () => {
        console.log("name is set");
    });
    chrome.storage.sync.get(["nameKey"]).then( (result) => {
        console.log("saved name: " + result.nameKey);
    });
   
}
document.addEventListener('DOMContentLoaded', inputName());

function showTime(){
    let currentTime = document.getElementById("time");
    let date = new Date();

    currentTime.innerHTML = date.toLocaleTimeString();
}
document.addEventListener('DOMContentLoaded', showTime());

let quoteBtn = document.getElementById("quote");
function randomQuote(){
    let url = `https://api.quotable.io/random`;
    let output = document.getElementById("quoteOutput");

    fetch(url)
    .then(response => response.json())
    .then(data =>{
        output.innerHTML = data.content;
    })
    .catch(error => {
        console.log("Error: " , error);
    })
}

document.addEventListener("click", randomQuote);