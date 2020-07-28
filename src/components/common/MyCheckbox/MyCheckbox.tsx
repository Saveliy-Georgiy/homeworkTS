import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import styles from "./MyCheckbox.module.css"
type InputPropsType = {
    checked: boolean
    onChange: (e:ChangeEvent<HTMLInputElement>) => void

}

export function MyCheckbox(props: InputPropsType) {

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        //let newIsDoneValue = e.currentTarget.checked
        props.onChange(e)
    }

    return (
        <>
            <input
                checked={props.checked}
                className={styles.checkbox}
                onChange={onChangeHandler}
                type="checkbox"/>
        </>
    );
}
