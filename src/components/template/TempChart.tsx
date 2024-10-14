import { GeneralContext } from "@/context/context";
import { Chart } from "react-google-charts";
import { useContext, useState } from 'react';
import { Day, Hour } from "@/models/weatherJsonResponse";

export default function TempChart() {

  const { weatherCondition } = useContext(GeneralContext);
  const [tempHourData, setTempHourData] = useState([] as any);

  let dailyWeatherCondition = {} as Day;
  let tempHour = [] as any;

  if (Object.keys(weatherCondition).length > 0) {
    dailyWeatherCondition = weatherCondition.days[0];

    tempHour = dailyWeatherCondition.hours.map((i: Hour) => {
      return [i.datetime.substring(0, 2), ((i.temp - 32) * 5 / 9)];
    });

    tempHour.unshift(["Temp", "Hora"]);

    //setTempHourData(tempHour);

  }

  console.log("TEMP - Hour", tempHour);
  console.log("CHART", dailyWeatherCondition);

  return (
    <Chart
      // Try different chart types by changing this property with one of: LineChart, BarChart, AreaChart...
      chartType="LineChart"
      data={
        tempHour.slice(0, 5)
      }
      options={{
        title: "Variação de Temperatura ºC",
      }}
      legendToggle
    />
  );
}