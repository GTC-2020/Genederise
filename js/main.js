
let buttonSearch = document.querySelector('.button_search');
let inputFiels = document.querySelector('#input_name');
let outputField =document.querySelector('.output').querySelector('p');



  function getName(){
    return inputFiels.value;
}

 async function  getGender(){
    firstName = getName();

    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${firstName}`;

    let response =  fetch(url);

    let  jsonInput = response.then(response => response.json());
    jsonInput.then(jsonInput => {
        outputField.textContent =`${firstName}-${jsonInput.gender}`});
    
}


buttonSearch.addEventListener('click', async function(){
    getGender();

})


