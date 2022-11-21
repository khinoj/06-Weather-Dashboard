// grab text from button

//grab text from input box

//API_Key
const openWeather_API_KEY = '5c36e0b211379adb9db1348735cb898b';


city = "Atlanta";

const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeather_API_KEY}`
console.log(url)


//city temp wind humidity
