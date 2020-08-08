import React, { Component } from "react";
import styles from "./Calendar.module.css";

export default class Calendar extends Component {
  render() {
    return (
      <div className={styles.calendar}>
        <header>
          <button>{"<"}</button>

          <select></select>
          <select></select>

          <button>{">"}</button>
        </header>
        <table>
          <thead>
            <tr></tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    );
  }
}
