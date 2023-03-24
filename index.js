const body = document.querySelector("body");
const main = document.querySelector("main#main");
body.removeChild(main);
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "OCHOLLA is the champion"
body.append(newHeader);

// Write your code here!