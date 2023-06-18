import React from "react";

import styles from "./Search.module.css";
import searchNormal from "../assets/search-normal.svg";

import fatrows from "../assets/fatrows.svg";
import elements from "../assets/element-3.svg";

const Search = () => {
  return (
    <div className={styles.Search}>
      <h1>We tackle interesting topics every day</h1>
      <img src={searchNormal} alt="search" className={styles.searchNormal} />

      <div className={styles.flexDiv}>
        <input type="text" placeholder="Find Courses" />
        <div>
          <button className={styles.button}>
            <img className={styles.fatrows} src={fatrows} alt="List View" />
          </button>
          <button className={styles.buttonP}>
            <img className={styles.fatrows} src={elements} alt="Grid View" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
