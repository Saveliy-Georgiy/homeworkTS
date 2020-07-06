import React, {useState} from "react";
import styles from "./TodoListHeader.module.css";

type PropsType = {
    addTask: (newText: string) => void
}

function TodoListHeader(props: PropsType) {

    let [isDisabled, setIsDisabled] = useState(true)

    let [error, setError] = useState(false)

    let [title, setTitle] = useState("")

    /*function switchButtonStatus () {
        if (title === "") {
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }
    };*/

    function onAddTaskClick () {
        let newTitle = title;
        title = "";
        props.addTask(newTitle);
        setIsDisabled(true);
        setError(false);
        setTitle("");
    }

    function onAddTaskKeyPress (e: any) {
        if (e.key === "Enter") {
            onAddTaskClick();
        }
    }
        // const {error} = this.state;
        const inputClassname = error ? styles.error : styles.inputText;
        return (
            <div className={styles.TodoListHeader}>
                <h3 className={styles.todoListHeaderTitle}>What to Learn</h3>
                <div className={styles.todoListNewTaskForm}>
                        <input
                            //ref={this.newTaskTitleRef}
                            type="text"
                            placeholder="New task name"
                            // onInput={}
                            className={inputClassname}
                            onKeyPress={onAddTaskKeyPress}
                            value={title}
                        />
                    <button
                        onClick={onAddTaskClick}
                        disabled={isDisabled}
                    >
                        Add
                    </button>
                </div>
            </div>
        );
}

export default TodoListHeader;
