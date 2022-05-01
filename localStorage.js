'use strict'
const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userMessage = document.getElementById('message');
const searchForInput = document.getElementById('searchForInput')

const addBtn = document.getElementById('add');
const searchForBtn = document.getElementById('searchFor');
const deleteBtn = document.getElementById('delete');
const infomation = document.getElementById('info');



addBtn.addEventListener('click', function(ev){
    ev.preventDefault()

    let saveUser = JSON.parse(localStorage.getItem(userName.value)) || [];

    let userData = {
        name: userName.value,
        email: userEmail.value,
        message: userMessage.value
    }

    saveUser.push(userData)

    localStorage.setItem(userName.value, JSON.stringify(userData));
    
})

searchForBtn.addEventListener('click', function(){

    let pullUserData = JSON.parse(localStorage.getItem(searchForInput.value));

    infomation.innerHTML = pullUserData.name + pullUserData.email + pullUserData.message;

})

deleteBtn.addEventListener('click', function(){
    localStorage.removeItem(searchForInput.value);
})