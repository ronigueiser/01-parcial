const API_KEY = '5c3250ce85bfda68a2dcd05b8cc69fb7';

let search = document.getElementById('search');
let main = document.querySelector('#main');
let buttom = document.getElementById('send');
let d = document;


buttom.addEventListener('click', () => {

    let p = d.createElement('p');
    p.innerHTML = search.value;
    main.appendChild(p);

})


