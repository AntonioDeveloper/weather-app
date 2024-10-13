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

  switch (currentWeatherCondition) {
    case "Sunny":
      bckgImgWeather = "bg-ensolarado";
      break;
    case "Overcast":
      bckgImgWeather = "bg-nublado";
      break;
    case "Clear":
      bckgImgWeather = "bg-noite-limpa";
      break;
    case "Partially cloudy":
      bckgImgWeather = "bg-algumas-nuvens";
      break;
    case "Cloudy":
      bckgImgWeather = "bg-algumas-nuvens";
      break;
    case "Rain":
      bckgImgWeather = "bg-chuva-fraca";
      break;
    case "Light rain":
      bckgImgWeather = "bg-chuva-fraca";
      break;
    case "Rain, Overcast":
      bckgImgWeather = "bg-chuva-fraca";
      break;
    case "Heavy rain":
      bckgImgWeather = "bg-heavy-rain";
      break;
    case "Light drizzle":
      bckgImgWeather = "bg-chuva-fraca";
      break;
    default:
      bckgImgWeather = "bg-ensolarado";
  }

  // bg-slate-950 opacity-50

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
        {/* <p className='text-slate-950'>{currentWeatherCondition}</p> */}
      </div>
      {props.children}
    </main >
  )
}