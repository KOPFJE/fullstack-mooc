import axios from 'axios';
import Weather from './Weather';
import { useState, useEffect } from 'react';

const Country = (props) => {
    const [weather, setWeather] = useState({});
    const lat = props.country.capitalInfo.latlng[0];
    const lng = props.country.capitalInfo.latlng[1];
    const weatherAPIKey = process.env.REACT_APP_OW_API_KEY;

    useEffect( () => {
        const getWeatherData = async () => {
            const request = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lng}&appid=${weatherAPIKey}`;
            await axios.get(request).then(
                res => {
                    setWeather(res.data);
                    console.log(res.data);
                }
            );
        };
        getWeatherData().catch(console.error);
    }, []);

    return(
        <div>
            <h2>{ props.country.name.common }</h2>
            <ul>
                <li><strong>Area:</strong> { props.country.area }</li>
                <li><strong>Capital:</strong> { props.country.capital }</li>
            </ul>
            <h3>Languages</h3>
            <ul>
                { 
                    Object.entries(props.country.languages).map(
                        (language) => {
                            return(<li key={language[0]}>{language[1]}</li>);
                        } 
                    ) 
                }
            </ul>
            <img src={props.country.flags.png} alt={props.country.name.common} />
            <Weather capital={props.country.capital} data={weather} />
        </div>
    );
}
export default Country;