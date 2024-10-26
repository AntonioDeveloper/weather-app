import { useContext, useEffect, useState } from 'react';
import SearchInput from './SearchInput';
import { GeneralContext } from '@/context/context';
import WeatherDataTab from './WeatherDataTab';
import { Day, Hour } from '../../models/weatherJsonResponse';
import MainDataPanel from './MainDataPanel';

interface PaginaProps {
  children?: React.ReactNode;
}

export default function Pagina(props: PaginaProps) {

  const { weatherCondition } = useContext(GeneralContext)
  const [currentWeatherCondition, setCurrentWeatherCondition] = useState("");
  const [currentWeatherInfo, setCurrentWeatherInfo] = useState({} as Hour);
  const [weatherIcon, setWeatherIcon] = useState("");

  let currHour = new Date().getHours();
  let currentHourCondition: string = "";

  useEffect(() => {
    if (Object.keys(weatherCondition).length !== 0) {
      currentHourCondition = weatherCondition.days[0].hours[currHour].conditions;
      setCurrentWeatherCondition(currentHourCondition);
      setCurrentWeatherInfo(weatherCondition.days[0].hours[currHour]);
      setWeatherIcon(weatherCondition.currentConditions.icon);

      console.log("weatherCondition", weatherCondition);
    }

  }, [weatherCondition]);

  let biweeklyTempData = [] as any;

  if (weatherCondition.days) {
    biweeklyTempData = weatherCondition.days.map((day: Day) => {
      return {
        day: day.datetime,
        tempMax: day.tempmax,
        tempMin: day.tempmin
      };
    });
  }

  console.log("ICON", weatherIcon);

  let bckgImgWeather = "";

  if (currentWeatherCondition.includes("Ensolarado")) {
    bckgImgWeather = "bg-ensolarado";
  } else if (currentWeatherCondition.includes("Nublado") && weatherIcon.includes("day")) {
    bckgImgWeather = "bg-nublado";
  } else if (currentWeatherCondition.includes("Nublado") && weatherIcon.includes("cloudy")) {
    bckgImgWeather = "bg-nublado";
  } else if (currentWeatherCondition === "Chuva, Nublado") {
    bckgImgWeather = "bg-chuva-fraca";
  } else if (currentWeatherCondition.includes("Parcialmente") && currentWeatherCondition.includes("Nublado") && weatherIcon.includes("day")) {
    bckgImgWeather = "bg-algumas-nuvens";
  } else if (currentWeatherCondition.includes("Chuva") && weatherIcon.includes("dia")) {
    bckgImgWeather = "bg-dia-chuvoso";
  } else if (currentWeatherCondition.includes("Parcialmente") && currentWeatherCondition.includes("Nublado") && weatherIcon.includes("night")) {
    bckgImgWeather = "bg-noite-nublada";
  } else if (currentWeatherCondition.includes("night") && weatherIcon.includes("clear-night")) {
    bckgImgWeather = "bg-noite-limpa";
  } else if (currentWeatherCondition.includes("Nublado") || currentWeatherCondition.includes("Nublado") && weatherIcon.includes("night")) {
    bckgImgWeather = "bg-noite-nublada";
  } else if (currentWeatherCondition.includes("Rain") && weatherIcon.includes("night")) {
    bckgImgWeather = "bg-noite-chuvosa";
  }
  else if (currentWeatherCondition.includes("")) {
    bckgImgWeather = "bg-ensolarado";
  }

  return (
    <main className={
      `
      w-screen h-screen 
      ${bckgImgWeather}
      bg-no-repeat bg-cover flex
      
  `
    }>
      <aside className="flex flex-col w-1/4 h-full bg-slate-500/[.2]">
        <SearchInput />
        <WeatherDataTab currentWeatherInfo={currentWeatherInfo} />
      </aside>
      <MainDataPanel currentWeatherCondition={currentWeatherCondition} biweeklyTempData={biweeklyTempData} />
      {props.children}
    </main >
  )
}