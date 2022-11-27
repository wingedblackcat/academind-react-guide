import ChartBar from "./ChartBar";
import "./Chart.css";

/**
 * @param {object} props
 * @param {object[]} dataPoints
 * @returns
 */
const Chart = ({ dataPoints = [] }) => {
  return (
    <div className="chart">
      {dataPoints.map(({ value, label, id }) => (
        <ChartBar value={value} maxValue={null} label={label} key={id} />
      ))}
    </div>
  );
};

export default Chart;
