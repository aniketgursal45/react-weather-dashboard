import './WeatherApp.css'
import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from 'react'

export default function WeatherApp(){


    let[weatherInfo,setWeatherInfo]=useState({
        city: "",
        temp: "",
        tempMin: "",
        tempMax: "",
        humidity: "",
        feelsLike: "",
        weather: ""
    })

    return(
    <div className='weatherBox'>
        <h2>Skyline Analytics</h2>
        <SearchBox setWeatherInfo={setWeatherInfo}/>
        <InfoBox weatherInfo={weatherInfo}/>

    </div>
    )
}