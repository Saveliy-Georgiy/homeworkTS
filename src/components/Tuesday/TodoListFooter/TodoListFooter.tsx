import React, {useState} from "react";
import styles from "./TodoListFooter.module.css";
import {FilterValuesType} from "../Tuesday";
import {MyButton} from "../../common/renderCommonComponents/MyButton/MyButton";

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
                    <MyButton onClick={() => {props.changeFilter("all")}} name="All"/>
                    <MyButton onClick={() => {props.changeFilter("active")}} name="Active"/>
                    <MyButton onClick={() => {props.changeFilter("completed")}} name="Completed"/>
                </div>
                }
                {!isHidden && <span onClick={onHideFiltersClick}>hide</span>}
                {isHidden && <span onClick={onShowFiltersClick}>show</span>}
            </div>
        );
}

export default TodoListFooter;
