import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import styles from "./MyButton.module.css"

type ButtonPropsType = {
    onClick: () => void
    name: string
}

export function MyButton(props: ButtonPropsType) {

    return (
        <>
            <button
                className={styles.button}
                onClick={props.onClick}>{props.name}</button>
        </>
    );
}
