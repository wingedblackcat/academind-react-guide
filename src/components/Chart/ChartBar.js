import "./ChartBar.css";

/**
 * @param {object} props
 * @param {number} props.value
 * @param {number|null} props.maxValue
 * @param {string} props.label
 * @returns
 */
const ChartBar = ({ value, maxValue, label }) => {
  const barFillHeight =
    maxValue && maxValue > 0
      ? "0%"
      : `${Math.round((value / maxValue) * 100)}%`;

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
