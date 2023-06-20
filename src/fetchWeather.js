import axios from "axios"
const API_KEY = "2d4a591e68cc0c7fc3941161fa007cd9"
const URL ="https://api.openweathermap.org/data/2.5/weather"
const fetchWeather= async (query)=>{
    const {data}=await axios.get(URL,{
        params: {
            q:query,  //city name
            units:"metric",  // degree celcius
            APPID: API_KEY  //Api key
        }
    })
    return data
}

export default fetchWeather;
  