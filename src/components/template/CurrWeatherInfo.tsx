'use client'

import { GeneralContext } from "../../context/context"
import { useContext } from "react";

export default function CurrWeatherInfo() {
  const { weatherCondition } = useContext(GeneralContext)

  console.log("CHART", weatherCondition);

  return (
    <div>
      <p>{Object.keys(weatherCondition).length === 0 ? "Sem dados" : (`${weatherCondition.resolvedAddress}, ${weatherCondition.days[0].datetime}, ${weatherCondition.currentConditions.datetime}`)}</p>
    </div>
  )
}

