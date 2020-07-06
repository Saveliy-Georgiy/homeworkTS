import React, {useState} from 'react';
import MyName from "./MyName/MyName";
import Message from "./Message/Message";
import styles from './Monday.module.css'

function Monday() {

function zeroFirstFormat (value: any) {
    if (value < 10) {
        value = "0" + value;
    }
    return value;
}

function getTime () {
    let date = new Date();
    return `${zeroFirstFormat(date.getHours())}:${zeroFirstFormat(date.getMinutes())}`
}

let [timeAdded, setTimeAdded] = useState(getTime())

/*function changeTimeAdded(value: {() => time()}) {
    setTimeAdded(value)
}*/

  return (
    <div className={styles.mainContainer}>
        <MyName name="Biryukov Saveliy-Georgiy Yurievich"/>
        <Message
            name="Saveliy"
            timeAdded={timeAdded}
        />
    </div>
  );
}

export default Monday;
