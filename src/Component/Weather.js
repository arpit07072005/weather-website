import axios from 'axios';
import React, { useState } from 'react'

function Weather() {
    const [city, setCity]=useState("");
    const [dataset,setData]=useState();
    const handlecity=(e)=>{
setCity(e.target.value)
    }
    const fetch=async()=>{
      try {
        const response= await axios.get(`http://api.weatherapi.com/v1/current.json?key=e7123cd161214b23bdf165014242612&q=${city}&aqi=yes`)
        setData(response)
        console.log(dataset);
      } catch (error) {
        console.log("error",error);
      }
    }
    const handlesearch=()=>{
      fetch();
      setCity("")
    }
  return (
    <div className='weather-container'>
      <div className="container">
<input className='city-input' type="text" placeholder='Enter City' value={city} onChange={handlecity}/>
<button className='city-button' onClick={handlesearch}>Get weather</button>
<div className="image"><img src="weather02-1024.webp" alt="image" /></div>
{dataset &&<> <div className="city-name"><h1>{dataset.data.location.name}</h1></div>
<div className="city-temp"><h3>Temperature {dataset.data.current.temp_c} ℃</h3></div>
<div className="city-temp"><h3>Humidity {dataset.data.current.humidity} (RH)</h3></div>
<div className="last-update">Last update:{dataset.data.current.last_updated}</div>
</>}
      </div>
    </div>
  )
}

export default Weather
