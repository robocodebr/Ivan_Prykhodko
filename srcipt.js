let form =  document.querySelector('.serach');
let serch_input = document.querySelector('.serch_input');
let bot = document.querySelector('.bot');
let button = document.querySelector('.button');

function serach(e){
    e.preventDefault();
}

button.onclick = function(e){
    e.preventDefault();

    let url = `https://api.github.com/users/${serch_input.value}`;

    fetch(url)
    .then(function(responce){
        return responce.json();
    })
    .then(function(json){
        console.log(json);

       if(json.html_url != undefined){
            bot.innerHTML = `
            <div class="card" id="card">
                <p class="username">${serch_input.value}</p>
                <img src="${json.avatar_url}" alt="" class="img">
                <div class="link"><a href="${json.html_url}">Profile link</a></div>
            </div>
            
            `
        }else{
            bot.innerHTML = '';
        }
    })
};

