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

  //console.log("TEMP MAX", biweeklyMaxTemp);

  const options = {
    title: "Variação de Temperatura (15 Dias)",
    curveType: "function",
    legend: { position: "bottom" },
    backgroundColor: 'rgba(230, 230, 255, 0.7)',
    fontSize: 14,
    colors: ["orange"],
    vAxis: {
      gridlines: {
        count: 0
      },
      textStyle: {
        fontName: "Arial",
        color: "orange",
        bold: true,
        fontSize: 14,
      }
    },
    hAxis: {
      textStyle: {
        color: "orange",
        bold: true,
        fontSize: 14,
        fontName: "Arial",
      }
    },
  };

  return (
    <div className="chart-container">
      {
        !biweeklyMaxTemp
          ?
          (
            <p></p>
          )
          :
          (
            <Chart
              chartType="LineChart"
              width="100%"
              height="200px"
              data={
                biweeklyMaxTemp
              }
              options={options}
              legendToggle
            />
          )
      }
    </div>
  )
}