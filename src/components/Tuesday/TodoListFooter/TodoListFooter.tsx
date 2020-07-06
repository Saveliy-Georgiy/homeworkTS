import React, {useState} from "react";
import styles from "./TodoListFooter.module.css";
import {FilterValuesType} from "../Tuesday";

type PropsType = {
    changeFilter: (value: FilterValuesType) => void
}

function TodoListFooter(props: PropsType) {
    let [isHidden, setIsHidden] = useState(false)

    function onHideFiltersClick () {
            setIsHidden(true);
    }

    function onShowFiltersClick () {
        setIsHidden(false);
    }

        return (
            <div className={styles.todoListFooter}>
                {!isHidden && <div>
                    <button onClick={() => {props.changeFilter("all")}}>All</button>
                    <button onClick={() => {props.changeFilter("active")}}>Active</button>
                    <button onClick={() => {props.changeFilter("completed")}}>Completed</button>
                </div>
                }
                {!isHidden && <span onClick={onHideFiltersClick}>hide</span>}
                {isHidden && <span onClick={onShowFiltersClick}>show</span>}
            </div>
        );
}

export default TodoListFooter;
