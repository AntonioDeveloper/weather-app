import BiweeklyTempChart from "./BiweeklyTempChart";
import CurrWeatherInfo from "./CurrWeatherInfo";

interface TemperatureData {
  day: string;
  tempMax: number;
  tempMin: number;
}

interface MainDataPanelProps {
  currentWeatherCondition: string;
  biweeklyTempData: TemperatureData[];
}

export default function MainDataPanel(props: MainDataPanelProps) {

  return (
    <div className="w-full lg:w-3/4 lg:h-full bg-slate-100 opacity-50 flex flex-col justify-between">
      {<p className='highlighted-text-shadow text-left p-2'>{props.currentWeatherCondition ? props.currentWeatherCondition : "Previsão do tempo (15 dias)"}</p>}
      <CurrWeatherInfo />
      <BiweeklyTempChart biweeklyTempData={props.biweeklyTempData} />
    </div>
  )
}