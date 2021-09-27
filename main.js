const API_KEY = '5c3250ce85bfda68a2dcd05b8cc69fb7';
const lang = 'es';

let d = document;
let body = d.getElementById('body')
let search = d.getElementById('search');
let main = d.querySelector('#main');
let buttom = d.getElementById('send');
//let estadoCielo = d.getElementById('estadoCielo');
let secondary = d.getElementById('secondary');


buttom.addEventListener('click', () => {

    // let p = d.createElement('p');
    // p.innerHTML = search.value;
    // main.appendChild(p);

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=${API_KEY}&lang=${lang}&units=metric`
    ).then(function (response) {
        console.log(response);
        return response.json();
    }).then(function (responseJSON){
        console.log('imprimo json', responseJSON);
        drawMaker(responseJSON);
    }).catch(function (error){
        console.log('Fallo!',error)
    });

})

function drawMaker(data){

    main.innerHTML = "";
    secondary.innerHTML = "";

    console.log(data.weather.main)



    let h3Weather = d.createElement('h3');
    //let imgWeather = d.createElement('p');
    let imgEstado = d.createElement('img');

    h3Weather.innerHTML = data.name;
    h3Weather.classList = 'encabezado'
    main.appendChild(h3Weather);

    for (let cielo of data.weather){


        function estadoCielo(){
            return cielo.description
        }



        if(cielo.id === 800){
            imgEstado.src = 'img/Soleado.jpg';
            imgEstado.alt = `Imagen del estado del cielo: ${cielo.main}`;
            imgEstado.classList = 'imagen';
            secondary.appendChild(imgEstado);
            body.style.background = 'lightblue';
        } else if(cielo.id >= 801){
            imgEstado.src = 'img/Nublado.jpg';
            imgEstado.alt = `Imagen del estado del cielo: ${cielo.main}`;
            imgEstado.classList = 'imagen';
            secondary.appendChild(imgEstado);
            body.style.background = 'lightgray';
        } else if (cielo.id > 700 && cielo.id < 782){
            imgEstado.src = 'img/Arena.jpg';
            imgEstado.alt = `Imagen del estado del cielo: ${cielo.main}`;
            imgEstado.classList = 'imagen';
            secondary.appendChild(imgEstado);
            body.style.background = 'lightgoldenRodYellow';
        }else if (cielo.id >= 600 && cielo.id < 623){
            imgEstado.src = 'img/Nieve.jpg';
            imgEstado.alt = `Imagen del estado del cielo: ${cielo.main}`;
            imgEstado.classList = 'imagen';
            secondary.appendChild(imgEstado);
            body.style.background = 'mintcream';
        }else if (cielo.id >= 500 && cielo.id < 532){
            imgEstado.src = 'img/Lluvia.jpg';
            imgEstado.alt = `Imagen del estado del cielo: ${cielo.main}`;
            imgEstado.classList = 'imagen';
            secondary.appendChild(imgEstado);
            body.style.background = 'lightsteelblue';
        }else if (cielo.id >= 300 && cielo.id < 322){
            imgEstado.src = 'img/Lluvioso.jpg';
            imgEstado.alt = `Imagen del estado del cielo: ${cielo.main}`;
            imgEstado.classList = 'imagen';
            secondary.appendChild(imgEstado);
            body.style.background = 'lightblue';
        }else if (cielo.id >= 200 && cielo.id < 233){
            imgEstado.src = 'img/Tormenta.jpg';
            imgEstado.alt = `Imagen del estado del cielo: ${cielo.main}`;
            imgEstado.classList = 'imagen';
            secondary.appendChild(imgEstado);
            body.style.background = 'mediumblue';
        }



    }



    let ulTemperatura = d.createElement('ul');
    main.appendChild(ulTemperatura);
    let liST = d.createElement('li');
    let liHumedad = d.createElement('li');
    let liPresion = d.createElement('li');
    let liTemperatura = d.createElement('li');
    let liTempMax= d.createElement('li');
    let liTempMin = d.createElement('li');
    let liEstadoCielo = d.createElement('li');

    console.log(data.main.humidity)

        liEstadoCielo.innerHTML = `Estado del cielo: ${estadoCielo()}`
        liST.innerHTML = `Sensación Térmica: ${data.main.feels_like}°`;
        liHumedad.innerHTML = `Humedad: ${data.main.humidity}%`;
        liPresion.innerHTML = `Presión: ${data.main.pressure} Hectopascales`;
        liTemperatura.innerHTML = `Temperatura Actual: ${data.main.temp}°`;
        liTempMax.innerHTML = `Temperatura Máxima: ${data.main.temp_max}°`;
        liTempMin.innerHTML = `Temperatura Mínima: ${data.main.temp_min}°`;

        ulTemperatura.appendChild(liEstadoCielo);
        ulTemperatura.appendChild(liST);
        ulTemperatura.appendChild(liHumedad);
        ulTemperatura.appendChild(liPresion);
        ulTemperatura.appendChild(liTemperatura);
        ulTemperatura.appendChild(liTempMax);
        ulTemperatura.appendChild(liTempMin);






}
