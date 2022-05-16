const Weather = (props) => {
    console.log(props.data);
    return(
        <div>
            <h3>Weather in { props.capital }</h3>
            
        </div>
    );
    /*
                <p><strong>Temperature:</strong> {props.data.main.temp} Celsius</p>
            <img src={ `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png` } alt={props.data.weather[0].description } />
            <p><strong>Wind:</strong> {props.data.wind.speed} m/s</p>
    */
}
export default Weather;