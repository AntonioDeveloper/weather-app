import Pagina from "@/components/template/Pagina";
import { Root } from '../models/weatherJsonResponse'
//import apiCall from "./api/weatherAPI"
import { useEffect, useState } from "react";

export default function Home() {

  const [inputValStored, setInputValStored] = useState("");
  const [weatherCondition, setWeatherCondition] = useState({} as Root);
  //const [weatherConditionsJson, setWeatherConditionsJson] = useState<any>([]);



  useEffect(() => {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${inputValStored}?key=9WDVFPB33F3RK7Q4QPTTPH3T8 `)
      .then(resp => resp.json())
      .then(data => {
        setWeatherCondition(data)
        // console.log(data, "inputValStored", inputValStored);
        //console.log("weatherCondition", weatherCondition);
      });
  }, [inputValStored]);

  // useEffect(() => {
  //   fetch("https://www.weatherapi.com/docs/weather_conditions.json")
  //     .then(resp => resp.json())
  //     .then(data => setWeatherConditionsJson(data));
  //   console.log("CONDITIONS", weatherConditionsJson);
  // }, [inputValStored]);

  //setWeatherConditionsJson(data)

  // useEffect(() => {
  //   fetch("https://www.weatherapi.com/docs/forecast.json")
  //     .then(resp => resp.json())
  //     .then(data => console.log("FORECAST", data));
  // }, [inputValStored]);

  //weatherCondition={weatherCondition}

  return (
    <Pagina inputValStored={inputValStored} setInputValStored={setInputValStored} weatherCondition={weatherCondition}>
    </Pagina>
  )
}
