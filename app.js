
const weatherApi={
    key:"478f145abdc368b512cc37e1367b74a5",
    baseurl:"https://api.openweathermap.org/data/2.5/weather"
}
const searchInputBox=document.getElementById('input-box');



//Event Listener Function on Keypress
searchInputBox.addEventListener('keypress',(event)=>{ //event function ka argument hai
    if(event.code === 'Enter'){   //event mai ek ek alphabe aaega type kia hua,bs dekhlo 13==enter kab ata hai
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
    }
});
//Get Weather Report
function getWeatherReport(city)
{ 
    fetch(`${weatherApi.baseurl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather=>{
        return weather.json();
    }).then(showWeatherReport);//define show weather report mai hai
}
//Show Weather Report
function showWeatherReport(weather)
{
console.log(weather);/*jo bhi data json format mai api se aya hai*/
                   /*usko weather represent kar rha hai*/
 

 //Date manage
 let city=document.getElementById('city');
city.innerHTML= (`${weather.name}, ${weather.sys.country}`);

//normal temperature
let temperature=document.getElementById('temp');
temperature.innerHTML=(`${Math.round(weather.main.temp)}&deg;C`);

//minmax temperature
let minmaxi=document.getElementById('min-max');
minmaxi.innerHTML=(`${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `);

//type of weather
let weathertype=document.getElementById('weather');
weathertype.innerHTML=`${weather.weather[0].main}`;
console.log(`${weather.weather[0].main}`);

//date change krne k lie
let date=document.getElementById('date');
let todayDate=new Date();
date.innerHTML=datemanage(todayDate);


//background weather k hisaab se
if(weathertype.textContent=='Clear')
{
    document.body.style.backgroundImage="url('/images/weather-clear.jpg')";
}else if(weathertype.textContent=='Clouds'){
    document.body.style.backgroundImage='url("/images/cloud.jpg")';
}
else if(weathertype.textContent=='Rain'){
    document.body.style.backgroundImage='url("/images/rain.jpg")';
}
else if(weathertype.textContent=='Snow'){
    document.body.style.backgroundImage='url("/images/snow.jpg")';
}
else if(weathertype.textContent=='Thunderstorm'){
    document.body.style.backgroundImage='url("/images/thunderstorm.jpg")';
}
else if(weathertype.textContent=='Haze'){
    document.body.style.backgroundImage='url("/images/haze.jpg")';
}

}

//Date manage
function datemanage(dateArg)
{
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];

    let year=dateArg.getFullYear();
    let month=months[dateArg.getMonth()];//month number dega
    let date=dateArg.getDate(); //date dega
    let day=days[dateArg.getDay()];//day number defa mon=1

    return `${date} ${month} (${day}) ${year}`;
}




/*478f145abdc368b512cc37e1367b74a5*/
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}*/
