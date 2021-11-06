window.addEventListener('load',() =>{
let long;
let lat;
let temperatureDescription = document.querySelector('.temperaturedescription');
let temperatureDegree = document.querySelector('.temperature-degree');
let locationTimezone = document.querySelector('.location-timezone');


if(navigator.geolocation){
 navigator.geolocation.getCurrentPosition(position =>{
    long = position.coords.longitude;
    lat = position.coords.latitude;
    const proxy = 'https://cors-anywhere.herokuapp.com/';

        const api = `${proxy}https://api.darksky.net/forecast/f9d9c6418c23d94745b836767721ad1/${lat},${long}`;

    fetch(api)
    .then(response =>{
   return response.json();
    })
    .then(data =>{
        const  {temperature, summary} = data.currently;
        //set DOm Elements from the api
        temperatureDegree.textContent = temperature;
        temperatureDescription.textContent = summary;
        locationTimezone.textContent = data.timezone;
    });

 }); 

}

function setIcons(icon,iconId){
    
}
});