import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {

    console.log(props.dataPoints)
    const dataPointValues = props.dataPoints.map(data => data.value);
    const totalMaximun = Math.max(...dataPointValues);


  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximun}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
