import React, {useState} from 'react';
import styles from './Junior.module.css'
import {MyEditableSpan} from "../../common/MyEditableSpan/MyEditableSpan";
import {restoreState, saveState} from "../../../brouserFunctions/brouserFunctions";

type StateType = {
    title: string
}

const Junior = () => {

    const [title, setTitle] = useState("я обычный спан")

    const onChangeHandler = (value: string) => {
        debugger
        setTitle(value)
    }
//* использование:
    const saveTitle = () => {
        saveState<StateType>("title", {title: title});
    }

// сохраняем объект типа StateType в ячейке "test"
    const restoreTitle = () => {
        const state: StateType = restoreState<StateType>("title", {title: title});
        setTitle(state.title)
    }
// получем в переменную state объект из ячейки "test" или дэфолтный объект если ячейка пуста
    
    return (
        <div className={styles.mainContainer}>
            <MyEditableSpan title={title} placeholder="напиши здесь что-нибудь" onChange={onChangeHandler}/>
            <button onClick={saveTitle}>save value</button>
            <button onClick={restoreTitle}>restore value</button>
        </div>
    );
}

export default Junior;
