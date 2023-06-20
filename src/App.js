import { useState } from 'react';
import './App.css';
import fetchWeather from './fetchWeather';
import moment from 'moment'

const App = ()=>{
  const [query, setQuery] = useState("")
  const [weather, setWeather] = useState({})

  const handleChange= (e)=>{
    setQuery(e.target.value)
  }
  const search = async (e)=>{
    if (e.code === 'Enter'){
      const data = await fetchWeather(query)
      setWeather(data)
      setQuery("")
    }
  }
  return(
    <div className='container'>
      <div className='card'>
        <div className='card-title'>
          <h1>Weather App</h1>
          <input placeholder='Enter City Name' type="text" value={query} onChange={handleChange} onKeyPress={search}/>
          </div>
          {weather.main &&
          <div className='card-body'>
            <section>
              <div id= "city">
                <h2>{weather.name}
                <span>&nbsp;{weather.sys.country}. weather</span></h2>
              </div>
              <div id= "time">
                <p>As of {moment().format('LL')},&nbsp;{moment().format('dddd')}</p>
              </div>
              <div id= "temp" style={{textAlign:'center'}}>
                <h2>{Math.round(weather.main.temp)}<span>&deg;C</span></h2>
                <img src={` https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
                <p>{weather.weather[0].description}</p>
              </div>
              
            </section>
            <main>
              <div id="a">
                Humidity {Math.round(weather.main.humidity)}%
              </div>
              <div id="b">
                Visibility {Math.round(weather.visibility)} mi
              </div>
              <div id="a">
                Wind Speed {Math.round(weather.wind.speed)} km/h
              </div>
              <div id= "b">
                Sunrise {new Date(weather.sys.sunrise*1000).toLocaleTimeString('en-IN')}
              </div>
              <div id="a">
                Sunset&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {new Date (weather.sys.sunset * 1000).toLocaleTimeString('en-IN')}
              </div>
              <div id="b">
                High/Low&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {Math.round(weather.main.temp)} / {Math.round(weather.main.temp)}
              </div>
            </main>
          </div>
       }
      </div>
    </div>
  )
}
export default App;