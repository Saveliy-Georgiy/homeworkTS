import React, {ChangeEvent, KeyboardEvent} from 'react';
import styles from "./InputVisitorName.module.css";

type PropsType = {
    title: string
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
    onChangeHandler: (e:  ChangeEvent<HTMLInputElement> ) => void
}

const InputVisitorName = (props:PropsType) => {

    return (
        <div>
            <input
                type="text"
                value={props.title}
                onChange={props.onChangeHandler}
                onKeyPress={props.onKeyPressHandler}
                placeholder="Имя своё введи"
                className={styles.inputVisitorName}
                //maxLength="25"
            />
        </div>
    );
}

export default InputVisitorName;