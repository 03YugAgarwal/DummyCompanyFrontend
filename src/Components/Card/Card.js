import React from "react";
// import img1 from "../../assets/img/1.png";
import styles from "./Card.module.css";
import rightArrow from "../../assets/arrow-right.svg";

const Card = (props) => {
    

  return (
    <div className={styles.card}>
      <img className={styles.img} src={require(`../../assets/img/${props.details.img}`)} alt={props.details.title} />
      <div className={styles.categoryDiv}>
        <h3 className={styles.category}>{props.details.title}</h3>
        <p className={styles.time}>2 hours ago</p>
      </div>
      <h3 className={styles.title}>
        {props.details.desc}
      </h3>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus
      </p>
      <div className={styles.readMore}>
        <h4 className={styles.button}>Read More</h4>
        <img className={styles.arrow} src={rightArrow} alt="arrow" />
      </div>
    </div>
  );
};

export default Card;
