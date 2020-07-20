import React, {useState} from 'react';
import MyName from "./MyName/MyName";
import styles from './Monday.module.css'
import Visitors from "./Visitors/Visitors";
import CommonComponents from "../common/CommonComponents";

const Monday = () => {

  return (
    <div className={styles.mainContainer}>
        <MyName name="Biryukov Saveliy-Georgiy Yurievich"/>
        <Visitors/>
       {/* <CommonComponents/>*/}
    </div>
  );
}

export default Monday;
