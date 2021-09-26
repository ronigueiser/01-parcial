const API_KEY = '5c3250ce85bfda68a2dcd05b8cc69fb7';
const lang = 'es';

let search = document.getElementById('search');
let main = document.querySelector('#main');
let buttom = document.getElementById('send');
let d = document;


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

    console.log(data)
    let pCiudad = d.createElement('p');
    pCiudad.innerHTML = `Nombre de la ciudad: ${data.name}`
    main.appendChild(pCiudad);


    let pWeather = d.createElement('p');
    let imgWeather = d.createElement('img');

    for (let cielo of data.weather){
        pWeather.innerHTML = `Estado del cielo: ${cielo.description.charAt(0).toUpperCase()}${cielo.description.slice(1)}`;
        main.appendChild(pWeather);

        imgWeather.src = `http://openweathermap.org/img/wn/${cielo.icon}@2x.png`;
        imgWeather.alt = cielo.main;
        main.appendChild(imgWeather);

    }

    let ulTemperatura = d.createElement('ul');
    main.appendChild(ulTemperatura);
    let liST = d.createElement('li');
    let liHumedad = d.createElement('li');
    let liPresion = d.createElement('li');
    let liTemperatura = d.createElement('li');
    let liTempMax= d.createElement('li');
    let liTempMin = d.createElement('li');

    console.log(data.main.humidity)


        liST.innerHTML = `Sensación Térmica: ${data.main.feels_like}°`;
        liHumedad.innerHTML = `Humedad: ${data.main.humidity}%`;
        liPresion.innerHTML = `Presión: ${data.main.pressure} Hectopascales`;
        liTemperatura.innerHTML = `Temperatura Actual${data.main.temp}°`;
        liTempMax.innerHTML = `Temperatura Máxima: ${data.main.temp_max}°`;
        liTempMin.innerHTML = `Temperatura Mínima: ${data.main.temp_min}°`;

        ulTemperatura.appendChild(liST);
        ulTemperatura.appendChild(liHumedad);
        ulTemperatura.appendChild(liPresion);
        ulTemperatura.appendChild(liTemperatura);
        ulTemperatura.appendChild(liTempMax);
        ulTemperatura.appendChild(liTempMin);





    //Mostrar: temperatura máxima, temperatura mínima, humedad, sensación térmica,
    // presión atmosférica y velocidad de viento.




}
