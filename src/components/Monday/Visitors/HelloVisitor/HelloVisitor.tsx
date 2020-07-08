import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import styles from "./HelloVisitor.module.css";
import avatar1 from "../../../../images/avatar1.jpg";

/*type PropsType = {
    addVisitor: (title: string) => void
}*/

type PropsType = {
    title: string
    name: string
    timeAdded: any
}
const HelloVisitor = (props: PropsType) => {
    //if(props.title) {
    return (
            <div className={styles.myName}>
                <div className={styles.message}>
                    <img src={avatar1} alt="avatar"/>
                    <div className={styles.commentBubble}>
                        <div className={styles.userName}>{props.name}</div>
                        <div className={styles.helloVisitor}>
                            {props.title}
                        </div>
                        <div className={styles.time}>{props.timeAdded}</div>
                    </div>
                </div>
            </div>
            )
    //}
   // return null
}

export default HelloVisitor;