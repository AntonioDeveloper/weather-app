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

  let currHour = new Date().getHours();
  let currentHourCondition: string = "";

  useEffect(() => {
    if (Object.keys(weatherCondition).length !== 0) {
      currentHourCondition = weatherCondition.days[0].hours[currHour].conditions;
      setCurrentWeatherCondition(currentHourCondition);
      setCurrentWeatherInfo(weatherCondition.days[0].hours[currHour]);
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

  let bckgImgWeather = "";

  if (currentWeatherCondition.includes("Sunny")) {
    bckgImgWeather = "bg-ensolarado";
  } else if (currentWeatherCondition.includes("Overcast")) {
    bckgImgWeather = "bg-nublado";
  } else if (currentWeatherCondition.includes("cloudy")) {
    bckgImgWeather = "bg-nublado";
  } else if (currentWeatherCondition.includes("night") && currentWeatherCondition.includes("clear")) {
    bckgImgWeather = "bg-noite-limpa";
  } else if (currentWeatherCondition.includes("rain") && currentWeatherCondition.includes("cloudy")) {
    bckgImgWeather = "bg-chuva-fraca";
  } else if (currentWeatherCondition.includes("rain")) {
    bckgImgWeather = "bg-heavy-rain";
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