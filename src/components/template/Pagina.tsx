import { Root } from '../../models/weatherJsonResponse'
import SearchInput from './SearchInput';

interface PaginaProps {
  children?: React.ReactNode;
  weatherCondition: Root;
  inputValStored: string;
  setInputValStored: (value: string) => void;
}

export default function Pagina(props: PaginaProps) {

  const currDay = props.weatherCondition?.days[0];

  console.log("currentHourObj", currDay);

  const currHour = new Date().getHours();

  const currentHourObj = props.weatherCondition?.days[0].hours[currHour];

  const currentWeatherCondition: string = currentHourObj.conditions;

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
    case `${currentWeatherCondition.includes("rain")}`:
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


  return (
    <main className={
      `
      w-screen h-screen 
      ${bckgImgWeather}
      bg-no-repeat bg-cover flex
  `
    }>
      <aside className="flex w-1/4 h-full bg-slate-950 opacity-50">
        <SearchInput inputValStored={props.inputValStored} setInputValStored={props.setInputValStored} />
      </aside>
      <div className="w-3/4 h-full bg-slate-100 opacity-50">
        {/* <p className='text-slate-950'>{currentWeatherCondition}</p> */}
      </div>
      {props.children}
    </main >
  )
}