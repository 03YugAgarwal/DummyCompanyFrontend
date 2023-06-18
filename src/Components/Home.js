import React, { useState } from "react";

import styles from "./Home.module.css";
import Button from "./UI/Button";
import Card from "./Card/Card";

// import img from "../../public/img/1.png"

const DUMMY_VALUE = [
    {id: 1,title: "LIFESTYLE", img: "1.png", desc: "Changing people's lifestyles for the better"},
    {id: 2,title: "TECHNOLOGY", img: "2.png", desc: "Simple Solutions for Complex Connections"},
    {id: 3,title: "SPORT", img: "3.png", desc: "All things are difficult before they are easy"},
    {id: 4,title: "EDUCATION", img: "4.png", desc: "How to Memorize everything you read?"},
    {id: 5,title: "LIFESTYLE", img: "1.png", desc: "Changing people's lifestyles for the better"},
    {id: 6,title: "TECHNOLOGY", img: "2.png", desc: "Simple Solutions for Complex Connections"},
    {id: 7,title: "SPORT", img: "3.png", desc: "All things are difficult before they are easy"},
    {id: 8,title: "EDUCATION", img: "4.png", desc: "How to Memorize everything you read?"},
    {id: 9,title: "LIFESTYLE", img: "1.png", desc: "Changing people's lifestyles for the better"},
    {id: 10,title: "TECHNOLOGY", img: "2.png", desc: "Simple Solutions for Complex Connections"},
    {id: 11,title: "SPORT", img: "3.png", desc: "All things are difficult before they are easy"},
    {id: 12,title: "EDUCATION", img: "4.png", desc: "How to Memorize everything you read?"},
    {id: 13,title: "LIFESTYLE", img: "1.png", desc: "Changing people's lifestyles for the better"},
    {id: 14,title: "TECHNOLOGY", img: "2.png", desc: "Simple Solutions for Complex Connections"},
    {id: 15,title: "SPORT", img: "3.png", desc: "All things are difficult before they are easy"},
    {id: 16,title: "EDUCATION", img: "4.png", desc: "How to Memorize everything you read?"},
]

const BUTTON_VALUES = [{title: "All",isPrimary: true}, {title: "Technology",isPrimary: false}, {title: "Lifestyle",isPrimary: false}, {title: "Healthcare",isPrimary: false}, {title: "Sport",isPrimary: false},{title: "Food",isPrimary: false}]

const Home = () => {

    const [currentFilter,setCurrentFilter] = useState("ALL")

    const changeFilter = (value) => {

        for(let i=0;i<BUTTON_VALUES.length;i++){
            if(BUTTON_VALUES[i].isPrimary=== true){
                BUTTON_VALUES[i].isPrimary = false
            }
        }
        for(let i=0;i<BUTTON_VALUES.length;i++){
            if(BUTTON_VALUES[i].title=== value){
                BUTTON_VALUES[i].isPrimary = true
            }
        }

        setCurrentFilter(value.toUpperCase())

    }

    const filteredValue = DUMMY_VALUE.filter((e)=>{
        if(currentFilter === "ALL"){
            return e
        }
        return e.title === currentFilter
    })

  return (
    <div className={styles.home}>
      {/* <Button primary={true}>All</Button>
      <Button>Technology</Button>
      <Button>Education</Button>
      <Button>Lifestyle</Button>
      <Button>Healthcare</Button>
      <Button>Sport</Button>
      <Button>Food</Button> */}
      {BUTTON_VALUES.map((button) => {
        return <Button primary={button.isPrimary} changeFilter={changeFilter} title={button.title}>{button.title}</Button>
      })}

      <div className={styles.cardDiv}>
        {filteredValue.map(e => {
            return <Card key={e.id} details={e} />
        })}
        
      </div>
    </div>
  );
};

export default Home;
