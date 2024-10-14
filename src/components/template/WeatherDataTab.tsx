'use client'

import { poppins } from '@/utils/fonts';
import { CurrentConditions } from '../../models/weatherJsonResponse';

interface WeatherDataTabProps {
  currentWeatherInfo: CurrentConditions
}

export default function WeatherDataTab(props: WeatherDataTabProps) {
  return (
    <div className={`grid grid-cols-2 p-5 gap-1 ${poppins.className}`}>
      <p className={`text-white flex flex-col font-medium text-4xl pb-4`} id="temperature">{((Number(props.currentWeatherInfo.temp) - 32) * 5 / 9).toFixed(1)} ºC
        <span className={`text-white flex flex-col font-thin text-xs`}>Temperatura</span>
      </p>
      <p className='text-white flex flex-col font-medium text-4xl pb-4' id="humidity">{props.currentWeatherInfo.humidity} %
        <span className={`text-white flex flex-col font-thin text-xs`}>Humidade</span>
      </p>
      <p className='text-white flex flex-col font-medium text-3xl pb-4' id="windspeed">{props.currentWeatherInfo.windspeed} km/h
        <span className={`text-white flex flex-col font-thin text-xs`}>Vento</span>
      </p>
      <p className='text-white flex flex-col font-medium text-3xl pb-4' id="uvindex">{props.currentWeatherInfo.uvindex}
        <span className={`text-white flex flex-col font-thin text-xs`}>Índice UV</span>
      </p>
      <p className='text-white flex flex-col font-medium text-3xl pb-4' id="dew">{props.currentWeatherInfo.dew}º
        <span className={`text-white flex flex-col font-thin text-xs`}>Orvalho</span>
      </p>
      <p className='text-white flex flex-col font-medium text-3xl pb-4' id="cloudcover">{props.currentWeatherInfo.cloudcover} %
        <span className={`text-white flex flex-col font-thin text-xs`}>Núvens</span>
      </p>
    </div>
  )
}