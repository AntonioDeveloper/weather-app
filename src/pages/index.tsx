import Pagina from "@/components/template/Pagina";
//import apiCall from "./api/weatherAPI"
import { useEffect, useState } from "react";
import SearchInput from "@/components/template/SearchInput";

export default function Home() {

  const [inputValStored, setInputValStored] = useState("");
  const [weatherCondition, setWeatherCondition] = useState({});
  const [weatherConditionsJson, setWeatherConditionsJson] = useState<any>([]);

  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=12d5b4ea61e64780996183644241401&q=${inputValStored}&aqi=no`)
      .then(resp => resp.json())
      .then(data => {
        setWeatherCondition(data)
        console.log(data, "inputValStored", inputValStored);
      });
  }, [inputValStored]);

  useEffect(() => {
    fetch("https://www.weatherapi.com/docs/weather_conditions.json")
      .then(resp => resp.json())
      .then(data => setWeatherConditionsJson(data));
  }, []);

  return (
    <Pagina conditionalBckg={weatherCondition} weatherConditionsJson={weatherConditionsJson} inputValStored={inputValStored} setInputValStored={setInputValStored}>
    </Pagina>
  )
}
