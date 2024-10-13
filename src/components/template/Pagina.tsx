import { useContext, useEffect, useState } from 'react';
import { Root } from '../../models/weatherJsonResponse'
import SearchInput from './SearchInput';
import { GeneralContext } from '@/context/context';

interface PaginaProps {
  children?: React.ReactNode;
  // weatherCondition: Root;
  // inputValStored: string;
  // setInputValStored: (value: string) => void;
}

export default function Pagina(props: PaginaProps) {

  const { weatherCondition } = useContext(GeneralContext)
  const [currentWeatherCondition, setCurrentWeatherCondition] = useState("");

  console.log("weatherCondition", weatherCondition)

  let currDay = {};
  let currHour = new Date().getHours();
  let currentHourObj: any = "";

  useEffect(() => {
    if (Object.keys(weatherCondition).length !== 0) {
      currDay = weatherCondition.days[0];
      currentHourObj = weatherCondition.days[0].hours[currHour].conditions;
      setCurrentWeatherCondition(currentHourObj);
    }
  }, [weatherCondition])

  console.log("currentWeatherCondition", currentWeatherCondition);
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
      <aside className="flex w-1/4 h-full ">
        <SearchInput />
      </aside>
      <div className="w-3/4 h-full bg-slate-100 opacity-50">
        {<p className='text-slate-950'>{currentWeatherCondition}</p>}
      </div>
      {props.children}
    </main >
  )
}