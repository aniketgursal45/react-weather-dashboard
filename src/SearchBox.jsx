import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox({ setWeatherInfo }) {

    let [city, setCity] = useState("");

    let[error,seterror]=useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_API_KEY;

    let fetchWeather = async () => {

        try{
        let resp = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);

        let resFinal = await resp.json();



        let weatherReport = {
            city: city: city.charAt(0).toUpperCase() + city.slice(1),
            temp: resFinal.main.temp,
            tempMin: resFinal.main.temp_min,
            tempMax: resFinal.main.temp_max,
            humidity: resFinal.main.humidity,
            feelsLike: resFinal.main.feels_like,
            weather: resFinal.weather[0].description
        }

        return weatherReport;
    }catch(err){
            throw err;
    }
    }

    let handleCity = (event) => {
        setCity(event.target.value);
    }

    let handleSub = async (event) => {
        event.preventDefault();
       try{
        let newWeather = await fetchWeather();
        setWeatherInfo(newWeather);
        setCity("");
        seterror(false);
       }catch(err){
         seterror(true);
       }

    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSub}>
                <TextField className="search-input" id="outlined-basic" label="City Name" onChange={handleCity} value={city} required variant="outlined" />
                <br /><br />
                <p className="error-msg">{error?"This place does not exist":""}</p>
                <Button className="search-btn" variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    );
}
