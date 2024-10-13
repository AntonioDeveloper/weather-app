'use client'

import { CurrentConditions } from '../../models/weatherJsonResponse';

interface WeatherDataTabProps {
  currentWeatherInfo: CurrentConditions
}

export default function WeatherDataTab(props: WeatherDataTabProps) {
  return (
    <div className={`grid grid-cols-3 p-5`}>
      <p className={`text-white flex flex-col`} id="temperature">{props.currentWeatherInfo.temp}
        <span className={`text-white flex flex-col'`}>Temperatura</span>
      </p>
      <p className='text-white flex flex-col' id="humidity">{props.currentWeatherInfo.humidity}
        <span>Humidade do Ar</span>
      </p>
      <p className='text-white flex flex-col' id="windspeed">{props.currentWeatherInfo.windspeed}
        <span>Vento</span>
      </p>
      <p className='text-white flex flex-col' id="uvindex">{props.currentWeatherInfo.uvindex}
        <span>Índice UV</span>
      </p>
      <p className='text-white flex flex-col' id="dew">{props.currentWeatherInfo.dew}
        <span>Orvalho</span>
      </p>
      <p className='text-white flex flex-col' id="cloudcover">{props.currentWeatherInfo.cloudcover}
        <span>Núvens</span>
      </p>
    </div>
  )
}