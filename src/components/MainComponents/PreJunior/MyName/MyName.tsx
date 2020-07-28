import React from "react";
import styles from "./MyName.module.css";

type PropsType = {
    name: string
}

function MyName(props: PropsType) {
    return (
        <div className={styles.myName}>{props.name}</div>
    );
}

export default MyName;