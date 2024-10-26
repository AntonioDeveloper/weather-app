import { GeneralContext } from "@/context/context";
import { Chart } from "react-google-charts";
import { useContext } from 'react';
import { Day, Hour } from "@/models/weatherJsonResponse";

export default function TempChart() {

  const { weatherCondition } = useContext(GeneralContext);

  let dailyWeatherCondition = {} as Day;
  let tempHour = [] as any;

  if (Object.keys(weatherCondition).length > 0) {
    dailyWeatherCondition = weatherCondition.days[0];

    tempHour = dailyWeatherCondition.hours.map((i: Hour) => {
      return [i.datetime.substring(0, 2), Number(((i.temp - 32) * 5 / 9).toFixed(2))];
    });

    tempHour.unshift(["Hora", "Temp"]);
  }

  // console.log("TEMP - Hour", tempHour);
  // console.log("CHART", dailyWeatherCondition);

  return (
    <Chart
      chartType="LineChart"
      data={
        tempHour
      }
      options={{
        title: "Variação de Temperatura ºC",
        titleTextStyle: {
          color: '#fff'
        },
        curveType: 'function',
        backgroundColor: "transparent",
        fontSize: 12,
        hAxis: {
          textStyle: {
            color: '#fff'
          }
        },
        vAxis: {
          textStyle: {
            color: '#fff'
          }
        }
      }}
      legendToggle
    />
  );
}