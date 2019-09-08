const toDo = document.querySelector(".add");
const list = document.querySelector("#list");
const bazaDanych = [];

function deleteElementL(id) {
    bazaDanych.splice(id,1);
    
    displayElementL();
}

function createElementL() {
    const dana = {content: toDo.value, checked: false};
    bazaDanych.push(dana);
    console.log(bazaDanych);

    displayElementL();
    
    toDo.value = "";
}

function displayElementL() {
    list.innerHTML = "";
    for (let i=0; i<bazaDanych.length; i++) {
        if (bazaDanych[i].checked === false) {
            const elementL = document.createElement("div");
            elementL.innerHTML = `<div class="content">${bazaDanych[i].content}</div> <img onclick="deleteElementL(${i})" class="hasiok" src="delete.svg">`;
            elementL.classList.add("elementL");
            list.appendChild(elementL);
        }
        else {
            const elementL = document.createElement("div");
            elementL.innerHTML = bazaDanych[i].content;
            elementL.classList.add("elementLC");
            list.appendChild(elementL);
        }
    }
}
console.log(window);
toDo.addEventListener("keypress", XD => XD.keyCode === 13 ? createElementL() : console.log("no kurwa rzeczywiście"));