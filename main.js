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
        let videoID = getVideoID(responseJSON);
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
            return "aBYAByd38m0";
        } else if (cielo.id >= 801) {
            return "6uxMRdRPaRY";
        } else if (cielo.id > 700 && cielo.id < 782) {
            return "bE_xx8ZMMrY";
        } else if (cielo.id >= 600 && cielo.id < 623) {
            return "gir_kQ-cgPs";
        } else if (cielo.id >= 500 && cielo.id < 532) {
            return "wXJi8fnz_jw";
        } else if (cielo.id >= 300 && cielo.id < 322) {
            return "t8_Dquklg4Y";
        } else if (cielo.id >= 200 && cielo.id < 233) {
            return "sC3IZSdpTGQ";
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
    let pTemperatura = d.createElement('p');
    h3Weather.innerHTML = data.name;
    h3Weather.classList = 'encabezado'
    main.appendChild(h3Weather);

    pTemperatura.innerHTML = `Temperatura: ${data.main.temp}??C`;
    main.appendChild(pTemperatura);

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
    //let liTemperatura = d.createElement('li');
    let liTempMax= d.createElement('li');
    let liTempMin = d.createElement('li');
    let liEstadoCielo = d.createElement('li');
    let liViento = d.createElement('li');

    console.log(data.wind.speed)

        liEstadoCielo.innerHTML = `Estado del cielo: ${estadoCielo()}`
        liST.innerHTML = `Sensaci??n T??rmica: ${data.main.feels_like}??C`;
        liHumedad.innerHTML = `Humedad: ${data.main.humidity}%`;
        liPresion.innerHTML = `Presi??n: ${data.main.pressure} Hectopascales`;
        //liTemperatura.innerHTML = `Temperatura Actual: ${data.main.temp}??`;
        liTempMax.innerHTML = `Temperatura M??xima: ${data.main.temp_max}??C`;
        liTempMin.innerHTML = `Temperatura M??nima: ${data.main.temp_min}??C`;
        liViento.innerHTML = `Viento: ${data.wind.speed}Km/h`;

        ulTemperatura.appendChild(liEstadoCielo);
        //ulTemperatura.appendChild(liTemperatura);
        ulTemperatura.appendChild(liHumedad);
        ulTemperatura.appendChild(liPresion);
        ulTemperatura.appendChild(liST);
        ulTemperatura.appendChild(liTempMax);
        ulTemperatura.appendChild(liTempMin);
        ulTemperatura.appendChild(liViento);






}
