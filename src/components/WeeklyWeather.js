import { useState } from "react";
import ConvertUnix from './ConvertUnix'
import {WeeklyWeatherStyled} from './Styles/WeeklyWeather.styled'
import {IoMdArrowDropdown} from "react-icons/io"



const WeeklyWeather = ({data}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
   if(activeIndex === index){  setActiveIndex(null)}
  else{
    setActiveIndex(index)
  }
  };
  
  const week = data && data.map((result,index) => {
    const active = index === activeIndex ? "active" : "";
     return(
       <WeeklyWeatherStyled key={result.dt}>
       <div  
       className={`container ${active}`} 
       onClick={() => onTitleClick(index)}>
         <p className="date"><ConvertUnix date={result.dt}/></p>
         
         <p>{Math.round(result.temp.min)}°</p>
         <p>{Math.round(result.temp.max)}°</p>
         <p>{result.weather[0].main}</p>
         <img
        src={`http://openweathermap.org/img/w/${result.weather[0].icon}.png`}
        alt="weather"
        />
        <div className={`arrow ${active}`}><IoMdArrowDropdown/></div>
      <div className={`content ${active}`}>

       
      
        <p>Morning {Math.round(result.temp.morn)}℃ </p>
        <p>afternoon {Math.round(result.temp.day)}℃ </p>
        <p>Evening {Math.round(result.temp.eve)}℃ </p>
        <p>Night {Math.round(result.temp.night)}℃ </p>
        </div>
  
       </div>
  
       </WeeklyWeatherStyled>
    )
    
    })

  return (

    
    <>
      {week}
    </>
  )
}




export default WeeklyWeather

