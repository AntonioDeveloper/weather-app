'use client'

import { GeneralContext } from "../../context/context";
import { poppins } from "@/utils/fonts";
import { useContext } from "react";
import Image from 'next/image';

export default function CurrWeatherInfo() {
  const { weatherCondition } = useContext(GeneralContext)

  let dateToFormat = [];

  let formatedDate = undefined;

  const weatherIcons = ["clear-day", "clear-night", "cloudy", "fog", "hail", "partly-cloudy-day", "partly-cloudy-night", "rain-snow-showers-day", "rain-snow-showers-night", "rain-snow-showers-day", "rain-snow-showers-night", "rain"];

  let foundWeatherIcon: string | undefined = "";


  if (Object.keys(weatherCondition).length > 0) {
    dateToFormat = weatherCondition.days[0].datetime.split("-");
    const [yyyy, mm, dd] = dateToFormat;
    formatedDate = new Date(Date.UTC(parseInt(yyyy), parseInt(mm) - 1, parseInt(dd), 3, 0, 0));

    foundWeatherIcon = weatherIcons.find((i: string) => i === weatherCondition.currentConditions.icon);
  }

  console.log("ICON", foundWeatherIcon);
  //console.log("CHART", weatherCondition);
  //console.log("formatedDate", formatedDate?.toLocaleDateString('pt-BR'));

  return (
    <div>
      {
        Object.keys(weatherCondition).length === 0
          ? <p>Sem dados</p>
          : (
            <div className="flex p-2">
              <Image
                src={`/img/2nd_Set-Color/${foundWeatherIcon}.png`}
                alt="Weather Icon"
                width="64"
                height="64"
              />
              <p className={`${poppins.className} pl-2 flex align-center`}>
                {weatherCondition.resolvedAddress}, {weatherCondition.currentConditions.datetime}, {formatedDate?.toLocaleDateString('pt-BR')}
                <br />
                {weatherCondition.description}
              </p>
            </div>
          )
      }

    </div>
  )
}

