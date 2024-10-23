import { Chart } from "react-google-charts";

interface TemperatureData {
  day: string;
  tempMax: number;
  tempMin: number;
}

interface BiweeklyTempChartProps {
  biweeklyTempData: TemperatureData[];
}

export default function BiweeklyTempChart(props: BiweeklyTempChartProps) {
  //console.log("TEMP MIN - MAX", props.biweeklyTempData);

  let biweeklyMaxTemp;

  if (props.biweeklyTempData.length > 0) {
    biweeklyMaxTemp = props.biweeklyTempData.map((t: TemperatureData) => {
      return [
        t.day.substring(5, t.day.length).split("-").reverse().join("/"),
        Number((t.tempMax - 32) * 5 / 9)
      ];
    });
    biweeklyMaxTemp.unshift(["Dia", "Temp Max"]);
  }


  console.log("TEMP MAX", biweeklyMaxTemp);

  return (
    //<div>GRÁFICO</div>
    <Chart
      chartType="Line"
      width="100%"
      height="200px"
      data={
        biweeklyMaxTemp
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
          title: 'Temp Máx',
          textStyle: {
            color: '#fff'
          }
        },
        vAxis: {
          title: 'Dia',
          textStyle: {
            color: '#fff'
          }
        },
        legend: { position: "bottom" },
      }}
      legendToggle
    />
  )
}