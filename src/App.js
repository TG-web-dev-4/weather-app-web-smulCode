import { useState, useEffect } from "react";
import GlobalStyles from "./components/Styles/Global";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import { MainContainer } from "./components/Styles/MainContainer.styled";
import { WeeklyWeatherCardStyled } from "./components/Styles/WeeklyWeatherCard.styled";
import { AppStyle } from "./components/Styles/App.styled";
import WeeklyWeather from "./components/WeeklyWeather";

export default function App() {
  const [weatherData, setWeatherData] = useState([{}]);
  const [locations, setLocations] = useState("");
  const [backgrounds, setBackgrounds] = useState(0);
  const [weeklyData, setWeeklyData] = useState([]);

  const getWeather = ({ term }) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${term}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        setBackgrounds(data.weather[0].id);
        setLocations(data.coord);
      });
  };

  useEffect(() => {
    const getWeeklyWeather = () => {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${locations.lat}&lon=${locations.lon}&exclude=minutely,hourly&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      )
        .then((res) => res.json())
        .then((data) => {
          setWeeklyData(data.daily);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    if (locations) getWeeklyWeather();
  }, [locations]);

  return (
    <>
      <GlobalStyles />

      <AppStyle bgImg={backgrounds}>
        <MainContainer>
          {!weatherData.main ? (
            <div style={{ width: "100vw" }}>
              <SearchBar onFormSubmit={getWeather} />

              <Header subTitle={"Enter in a city to get the weather"} />
            </div>
          ) : (
            <Card weatherData={weatherData} />
          )}

          {weatherData.cod === "404" || weatherData.cod === "400" ? (
            <Header title={" "} subTitle={"City not found."} />
          ) : (
            <></>
          )}

          {weeklyData.length === 0 || weatherData.cod === "404" ? (
            <></>
          ) : (
            <WeeklyWeatherCardStyled>
              <SearchBar onFormSubmit={getWeather} />
              <WeeklyWeather data={weeklyData} />
            </WeeklyWeatherCardStyled>
          )}
        </MainContainer>
      </AppStyle>
    </>
  );
}
