import ChartBar from "./ChartBar";
import "./Chart.css";

/**
 * @param {object} props
 * @param {import("../Expenses/ExpensesChart").DataPoint[]} props.dataPoints
 * @returns
 */
const Chart = ({ dataPoints = [] }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map(({ value, label }) => (
        <ChartBar
          value={value}
          maxValue={totalMaximum}
          label={label}
          key={label}
        />
      ))}
    </div>
  );
};

export default Chart;
