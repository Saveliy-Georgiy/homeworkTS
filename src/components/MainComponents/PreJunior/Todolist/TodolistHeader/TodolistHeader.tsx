import React, {KeyboardEvent, useState} from 'react';
import styles from "./TodolistHeader.module.css";
import {MyInput} from "../../../../common/MyInput/MyInput";
import {MyButton} from "../../../../common/MyButton/MyButton";

type PropsType = {
    addTask: (newText: string) => void
}

function TodolistHeader(props: PropsType) {

    let [error, setError] = useState<string | null>(null)

    let [title, setTitle] = useState("")

    const onAddTaskClick = () => {
        if(title.trim() !=="") {
            props.addTask(title)
            setTitle("")
        } else {
            setError("Title is required")
        }
    }

    const onChangeHandler = (value: string) => {
        setTitle(value)
    }

    const onAddTaskKeyPress = (e:KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.charCode ===13) {
            onAddTaskClick();
        }
    }

        return (
            <div className={styles.TodoListHeader}>
                <h3 className={styles.todoListHeaderTitle}>What to Learn</h3>
                <div className={styles.todoListNewTaskForm}>
                    <MyInput
                        placeholder="New task name"
                        onChange={onChangeHandler}
                        onEnter={onAddTaskKeyPress}
                        value={title}
                        error={error}
                    />
                    <MyButton onClick={onAddTaskClick} name="ADD"/>
                </div>
            </div>
        );
}

export default TodolistHeader;
