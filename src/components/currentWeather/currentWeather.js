import "./currentWeather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      {/* Top */}
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <br />
          <p className="weatherDescription">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weatherIcon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      {/* Bottom */}
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-lable">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-lable">Feels Like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-lable">Wind</span>
            <span className="parameter-value">{data.wind.speed}m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-lable">Humidity</span>
            <span className="parameter-value">
              {Math.round(data.main.humidity)}%
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-lable">Pressure</span>
            <span className="parameter-value">
              {Math.round(data.main.pressure)}hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
