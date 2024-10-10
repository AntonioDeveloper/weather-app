import { WeatherJsonType } from '../../models/weatherJsonResponse'
import SearchInput from './SearchInput';

interface PaginaProps {
  children?: any;
  conditionalBckg: any;
  weatherConditionsJson: WeatherJsonType;
  inputValStored: string;
  setInputValStored: (value: string) => void;
}


export default function Pagina(props: PaginaProps) {

  //console.log(props.conditionalBckg.current?.condition.text);

  //console.log("Weather Types", props.weatherConditionsJson);

  const currentWeatherCondition: string = props.conditionalBckg.current?.condition.text;

  console.log("Curr Weather", currentWeatherCondition);

  const isDay: number = props.conditionalBckg.current?.is_day;

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
    case "Cloudy":
      bckgImgWeather = "bg-algumas-nuvens";
      break;
    case "Patchy rain possible":
      bckgImgWeather = "bg-chuva-fraca";
      break;
    case "Light rain":
      bckgImgWeather = "bg-chuva-fraca";
      break;
    case "Moderate rain":
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
      bg-no-repeat bg-cover
  `
    }>
      <aside className="flex w-1/4 h-full bg-slate-950 opacity-50">
        <SearchInput inputValStored={props.inputValStored} setInputValStored={props.setInputValStored} />
      </aside>
      {props.children}
    </main >
  )
}