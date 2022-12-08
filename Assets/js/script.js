//API_Key
const openWeather_API_KEY = '5c36e0b211379adb9db1348735cb898b'
// let baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeather_API_KEY}'
// let unitOfMeasure = 'imperial'
// let city = "Seattle"
// let url


// grab text from button

//grab text from input box

// const url = ``
// console.log(url)

// $('#searchbtn').click(function () {

// })

$("#searchbtn").click(function () {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${$('#userinput').val()}&units=imperial&appid=${openWeather_API_KEY}`)
        .then((response) => response.json())
        .then(forecastResponse => {
            console.log('Daily Forecast Response', forecastResponse)
            for (let data of forecastResponse.list) {
                console.log('data', data)
                for (let weatherData of data.weather) {
                    console.log('data', data)
                }
            }
        })
        .catch((error) => {
            console.log(`Error: ${error.message}`);
        });
})


$(".majorcities").click(function () {
    console.log('Button Val', $(this).text())
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${$(this).text()}&units=imperial&appid=${openWeather_API_KEY}`)
        .then((response) => response.json())
        .then(forecastResponse => {
            console.log('Daily Forecast Response', forecastResponse)
            for (let data of forecastResponse.list) {
                console.log('data', data)
                for (let weatherData of data.weather) {
                    console.log('data', data)
                    $('#weeklyForecast').empty().append(`
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card" style="width: 18rem;">
                                <h1>${$(this).text()}</h1>
                                <img class="card-img-top" src='http://openweathermap.org/img/w/${weatherData.icon}.png'>
                                <div class="card-body">
                                    <h5 class="card-title">${data.dt_txt.split(' ')[0]} ${data.dt_txt.split(' ')[1]}</h5>
                                    <p class="card-text"> High Temp ${data.main.temp_max} Low Temp ${data.main.temp_min} Humidity ${data.main.humidity}<div/></p>
                                </div>
                            </div>                        
                        </div>
                        `)
                }
            }
        })
        .catch((error) => {
            console.log(`Error: ${error.message}`);
        });
})