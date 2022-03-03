
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

    let response = await fetch(url);

    let  gender = await response.json();
     outputField.textContent = `${firstName}-${gender.gender}`;
}


buttonSearch.addEventListener('click', async function(){
    getGender();
})


