import BiweeklyTempChart from "./BiweeklyTempChart";
import CurrWeatherInfo from "./CurrWeatherInfo";

interface TemperatureData {
  day: string;
  tempMax: number;
  tempMin: number;
}

interface MainDataPanelProps {
  currentWeatherCondition: any;
  biweeklyTempData: TemperatureData[];
}

export default function MainDataPanel(props: MainDataPanelProps) {

  return (
    <div className="w-3/4 h-full bg-slate-100 opacity-50 flex flex-col justify-between">
      {<p className='highlighted-text-shadow'>{props.currentWeatherCondition ? props.currentWeatherCondition : "Ensolarado"}</p>}
      <CurrWeatherInfo />
      <BiweeklyTempChart biweeklyTempData={props.biweeklyTempData} />
    </div>
  )
}