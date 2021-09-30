const API_KEY = '5c3250ce85bfda68a2dcd05b8cc69fb7';
const lang = 'es';

let d = document;
let body = d.getElementById('body')
let search = d.getElementById('search');
let main = d.querySelector('#main');
let buttom = d.getElementById('send');
//let estadoCielo = d.getElementById('estadoCielo');
let secondary = d.getElementById('secondary');
const valorUltimaBusqueda = JSON.parse(localStorage.getItem('Respuesta API'));

if (valorUltimaBusqueda != null){
    drawMaker(valorUltimaBusqueda);
}

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
        const videoID = getVideoID(responseJSON);
        creatYouTubePlayer(videoID);
        saveLocalStorage(responseJSON);

    }).catch(function (error){
        console.log('Fallo!',error)
    });




})

function saveLocalStorage (data){
    localStorage.setItem('Respuesta API', JSON.stringify(data));
}

function getVideoID(data){

    console.log(data)

    for (let cielo of data.weather) {
        if (cielo.id === 800) {
            return 'aBYAByd38m0';
        } else if (cielo.id >= 801) {
            return 'bE_xx8ZMMrY';
        } else if (cielo.id > 700 && cielo.id < 782) {
            return 'mowe__qcPm0';
        } else if (cielo.id >= 600 && cielo.id < 623) {
            return 'Kz1wHw16GyA';
        } else if (cielo.id >= 500 && cielo.id < 532) {
            return 'mPZkdNFkNps'
        } else if (cielo.id >= 300 && cielo.id < 322) {
            return 'WbsTWZtktqs';
        } else if (cielo.id >= 200 && cielo.id < 233) {
            return 'PV97yyeHB';
        }
    }
}





function drawMaker(data){

    main.innerHTML = "";
    secondary.innerHTML = "";

    //console.log(data.weather.main)



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
            body.style.background = 'lightslategray';
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
    let liViento = d.createElement('li');

    console.log(data.wind.speed)

        liEstadoCielo.innerHTML = `Estado del cielo: ${estadoCielo()}`
        liST.innerHTML = `Sensación Térmica: ${data.main.feels_like}°`;
        liHumedad.innerHTML = `Humedad: ${data.main.humidity}%`;
        liPresion.innerHTML = `Presión: ${data.main.pressure} Hectopascales`;
        liTemperatura.innerHTML = `Temperatura Actual: ${data.main.temp}°`;
        liTempMax.innerHTML = `Temperatura Máxima: ${data.main.temp_max}°`;
        liTempMin.innerHTML = `Temperatura Mínima: ${data.main.temp_min}°`;
        liViento.innerHTML = `Viento: ${data.wind.speed}Km/h`;

        ulTemperatura.appendChild(liEstadoCielo);
        ulTemperatura.appendChild(liST);
        ulTemperatura.appendChild(liHumedad);
        ulTemperatura.appendChild(liPresion);
        ulTemperatura.appendChild(liTemperatura);
        ulTemperatura.appendChild(liTempMax);
        ulTemperatura.appendChild(liTempMin);
        ulTemperatura.appendChild(liViento);






}
