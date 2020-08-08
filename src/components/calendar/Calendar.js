import React, { Component } from "react";
import styles from "./Calendar.module.css";

export default class Calendar extends Component {
  static defaultProps = {
    years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    monthNames: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
    weekDayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
  };
  render() {
    const { years, monthNames, weekDayNames } = this.props;
    const monthData = [
      [date, date, date, date, date, date, date],
      [date, date, date, date, date, date, date],
      [date, date, date, date, date, date, date],
      [date, date, date, date, date, date, date],
      [date, date, date, date, date, date, date],
      [date, date, date, date, date, date, date],
    ];
    return (
      <div className={styles.calendar}>
        <header>
          <button>{"<"}</button>

          <select>
            {monthNames.map((month, index) => (
              <option key={month} value={index}>
                {month}
              </option>
            ))}
          </select>

          <select>
            {years.map((year, index) => (
              <option key={year} value={index}>
                {year}
              </option>
            ))}
          </select>

          <button>{">"}</button>
        </header>
        <table>
          <thead>
            <tr>
              {weekDayNames.map((name) => (
                <th key={name}>{name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {monthData.map((week, index) => (
              <tr key={index} className="week">
                {week.map((date, index) =>
                  date ? (
                    <td
                      key={index}
                      className={classnames("day", {
                        today: calendar.areEqual(date, currentDate),
                        selected: calendar.areEqual(date, selectedDate),
                      })}
                      onClick={() => this.handleDayClick(date)}
                    >
                      {date.getDate()}
                    </td>
                  ) : (
                    <td key={index} />
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
