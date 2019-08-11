const electron = require('electron');
const { ipcRenderer } = electron;

const ul = document.querySelector('ul');

// Gets add item that is sent from main.js
ipcRenderer.on('item:add', function(e, item) {  
    console.log(item);
    const li = document.createElement('li');
    const itemText = document.createTextNode(item);
    li.appendChild(itemText);
    ul.appendChild(li);
})

// Clear items
ipcRenderer.on('item:clear', function() {  
    ul.innerHTML = '';
})