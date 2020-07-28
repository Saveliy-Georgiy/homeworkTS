import React, {useState} from 'react';
import MyName from "./MyName/MyName";
import styles from './PreJunior.module.css'
import Visitors from "./Visitors/Visitors";
import Todolist from "./Todolist/Todolist";

const PreJunior = () => {

  return (
    <div className={styles.mainContainer}>
        <MyName name="Biryukov Saveliy-Georgiy Yurievich"/>
        <Visitors/>
       <Todolist/>
    </div>
  );
}

export default PreJunior;
