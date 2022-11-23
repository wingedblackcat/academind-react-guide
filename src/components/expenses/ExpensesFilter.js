import React from "react";

import "./ExpensesFilter.css";

/**
 * @param {object} props
 * @param {Function} props.onYearSelect
 * @param {number} props.expensesYear
 */
const ExpensesFilter = ({ onYearSelect, expensesYear }) => {
  /**
   * @param {React.ChangeEvent} event
   */
  const selectChangeHandler = (event) => {
    const selectedYear = event.target.value;
    onYearSelect(Number(selectedYear));
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={expensesYear} onChange={selectChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
