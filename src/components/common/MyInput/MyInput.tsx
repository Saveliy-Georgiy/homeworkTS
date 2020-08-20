import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import styles from "./MyInput.module.css"

type InputPropsType = {
    value: string
    placeholder: string
    error?: string | null
    onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
    onChange: (value: string) => void
    onBlur?: () => void
}

export function MyInput(props: InputPropsType) {

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        props.onEnter && props.onEnter(e)
    }

    const inputClassname = props.error ? styles.error + ' ' + styles.input : styles.input;
    return (
        <>
            <input
                value={props.value}
                placeholder={props.placeholder}
                className={inputClassname}
                onChange={e => {debugger
                    props.onChange(e.currentTarget.value)}}
                onKeyPress={onKeyPress}
                type="text"
                onBlur={props.onBlur}/>
            {/* {props.error ? <span>{props.error}</span> : null}*/}
            {props.error && <div className={styles.errorMessage}>{props.error}</div>}
        </>
    );
}
