import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import './InfoBox.css';

export default function InfoBox({weatherInfo}) {

    const SUN_URL="https://media.istockphoto.com/id/824800468/photo/sun-on-blue-sky-with-clouds.webp?a=1&b=1&s=612x612&w=0&k=20&c=Slo8PLbmJmONDCBRazEkAwLj1LEqLb8AGmG82uyW0uI=";

    const Cold="https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    const rainy="https://media.istockphoto.com/id/1476190237/photo/summer-rain-raindrops-bad-weather-depression.webp?a=1&b=1&s=612x612&w=0&k=20&c=AqmeafeXtSEbnuq1mxdDr9nSrXunta3huhlXpLRMnes=";
    
    return (
        // sx={{ maxWidth: 345 }}
        <div className='infoBox'>
            <Card className="weather-card">
                <CardMedia
                    sx={{ height: 140 }}
                    image={weatherInfo.humidity>70?rainy:weatherInfo.temp>30?SUN_URL:weatherInfo.temp<15?Cold:SUN_URL}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {weatherInfo.city}&nbsp;{weatherInfo.humidity>70?<ThunderstormIcon/>:weatherInfo.temp>30?<SunnyIcon/>:weatherInfo.temp<15?<AcUnitIcon/>:<SunnyIcon/>}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <span>Temperature: {weatherInfo.temp}&deg;C</span>
                        <span>Min Temp: {weatherInfo.tempMin}&deg;C</span>
                        <span>Max Temp: {weatherInfo.tempMax}&deg;C</span>
                        <span>Humidity: {weatherInfo.humidity}</span>
                        <span>Feels Like: {weatherInfo.feelsLike}</span>
                        <span>Weather: {weatherInfo.weather}</span>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );

}
