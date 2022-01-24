import { CardStyled } from "./Styles/Card.styled";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaTemperatureHigh } from "react-icons/fa";
import { FaTemperatureLow } from "react-icons/fa";
import { BsDropletHalf } from "react-icons/bs";
import { SiWindicss } from "react-icons/si";

const Card = ({ weatherData }) => {
  return (
    <CardStyled>
      {/* 1 container */}
      <div className="location-title">
        <h2>
          <FaMapMarkerAlt />
          {weatherData.name}
          <span>, {weatherData.sys.country}</span>
        </h2>
      </div>

      {/* 2 container */}
      <div className="temperature">
        <h1>
          {Math.round(weatherData.main.temp)}
          <span className="celsius">°</span>
        </h1>
      </div>

      {/* container 3 */}

      <div className="weather-details">
        <div className="container-details">
          <div className="container-flex">
            <p>
              <BsDropletHalf />
              {weatherData.main.humidity}%
            </p>
            <p>
              <SiWindicss /> {weatherData.wind.speed}km/h
            </p>
          </div>
          <div className="container-flex">
            <h3>
              min. <FaTemperatureLow /> {Math.round(weatherData.main.temp_min)}℃
            </h3>
            <h3>
              max. <FaTemperatureHigh />
              {Math.round(weatherData.main.temp_max)}℃
            </h3>
          </div>
        </div>
      </div>
      {/* container 4 */}
      <div className="weather-img">
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
          alt={`${weatherData.weather[0].main} icon`}
        />
        <p className="weather-description">
          {weatherData.weather[0].description}
        </p>
      </div>
    </CardStyled>
  );
};

export default Card;
