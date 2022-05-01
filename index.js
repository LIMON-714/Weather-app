
const sButton = document.getElementById("btn");


sButton.addEventListener("click",function() {

const  inputElement = document.getElementById("city-name").value ;

fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputElement+'&appid=aa53c4c2b20584c5768f3ff741098e6a')
  .then(response => response.json())
  .then(data => {
    const cityName = data.name;
    const tamp = data.main.temp;
    const tampara = tamp - 273.15;
    const description = data.weather[0].description;


    document.getElementById('city').innerHTML = cityName;
    document.getElementById('temp').innerHTML = tampara.toFixed(2);
    document.getElementById('des').innerHTML = description;
    
  })
    .catch(res => alert("plese type right city name  !.."))
});

