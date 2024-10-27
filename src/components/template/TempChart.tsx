import { GeneralContext } from "@/context/context";
import { Chart } from "react-google-charts";
import { useContext } from 'react';
import { Day, Hour } from "@/models/weatherJsonResponse";

export default function TempChart() {
  type HourTempTuple = [hour: string, temp: number];
  const { weatherCondition } = useContext(GeneralContext);

  let dailyWeatherCondition = {} as Day;
  let tempHour: (string | number)[][] = [];

  if (Object.keys(weatherCondition).length > 0) {
    dailyWeatherCondition = weatherCondition.days[0];

    tempHour = dailyWeatherCondition.hours.map((i: Hour) => {
      return [i.datetime.substring(0, 2), Number(((i.temp - 32) * 5 / 9).toFixed(2))];
    });

    const convertedData: HourTempTuple[] = tempHour.map(item => {
      if (item.length === 2 && typeof item[0] === 'string' && typeof item[1] === 'number') {
        return [item[0] as string, item[1] as number]; // Type assertion
      }
      throw new Error("Formato de dados inválido");
    });

    tempHour.unshift(["Hora", "Temp"]);
  }

  console.log("TEMP - Hour", tempHour);
  // console.log("CHART", dailyWeatherCondition);

  return (
    <Chart
      chartType="LineChart"
      data={
        tempHour
      }
      options={{
        title: "Variação de Temperatura ºC",
        colors: ["white"],
        titleTextStyle: {
          color: '#fff'
        },
        curveType: 'function',
        legend: { position: "bottom" },
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