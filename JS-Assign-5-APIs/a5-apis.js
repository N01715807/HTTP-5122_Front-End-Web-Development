const apiKey = '876600b6c83302be0245b6d2f7c17532'

function getWeather(city)
{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      let xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.send();

      xhr.onload = function ()
      {
        if (xhr.status == 200)
            {
                const data = JSON.parse(xhr.responseText)
                console.log(data)

                //CITY NAME (3.a) AND WEATHER ICON (3.d)
                document.getElementById('location').textContent = data.name;
                const iconCode = data.weather[0].icon
                const iconURL = `http://openweathermap.org/img/w/${iconCode}.png`;
                document.getElementById('icon').innerHTML = `<img src="${iconURL}" alt="${data.weather[0].description}">`;

                //TEMPERATURE (3.b)
                document.getElementById('temperature').textContent = `${data.main.temp} °C \u{1F321}`;
                //CONDITIONS (3.c)
                document.getElementById('conditions').textContent = data.weather[0].description;
                
                //Extra Info
                const sunrise = new Date(data.sys.sunrise * 1000);
                const hours = sunrise.getHours().toString().padStart(2, '0');
                const minutes = sunrise.getMinutes().toString().padStart(2, '0');
                document.getElementById('extra-info').textContent = `Sunrise: ${hours}:${minutes}`;

                document.getElementById('output').style.display = 'block';


            }
            else
                {
                    document.getElementById('error').textContent='error'
                }
      }
}

window.onload = function () {
document.getElementById('Toronto').addEventListener('click', function(){getWeather("Toronto");});
document.getElementById('Saskatoon').addEventListener('click', function(){getWeather("Saskatoon");});
}