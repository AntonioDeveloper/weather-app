import BiweeklyTempChart from "./BiweeklyTempChart";

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
    <div className="w-3/4 h-full bg-slate-100 opacity-50">
      {<p className='highlighted-text-shadow'>{props.currentWeatherCondition ? props.currentWeatherCondition : "Ensolarado"}</p>}
      <BiweeklyTempChart biweeklyTempData={props.biweeklyTempData} />
    </div>
  )
}