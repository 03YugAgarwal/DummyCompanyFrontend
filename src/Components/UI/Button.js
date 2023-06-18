import React from 'react'

import styles from './Button.module.css'

const Button = (props) => {
    
    let style = styles.buttonSecondary;

    if(props.primary){
        style = styles.buttonPrimary;
    }

    const changeFilter = () => {
        props.changeFilter(props.title)
    }

  return (
    <button className={style} onClick={changeFilter}>{props.children}</button>
  )
}

export default Button