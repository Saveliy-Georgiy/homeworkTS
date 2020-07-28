import React from "react";
import styles from "./TodolistTasks.module.css";
import TodolistTask from "./TodolistTask/TodolistTask";

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

type PropsType = {
    tasks: Array<TaskType>
    deleteTask: (taskId: string) => void
    changeStatus: (taskId:string, isDone:boolean) => void
}

function TodolistTasks(props: PropsType) {

    let tasksElements = props.tasks.map((task, index) => {
        return (
            <TodolistTask
                key={index}
                task={task}
                deleteTask={props.deleteTask}
                changeStatus={props.changeStatus}
            />
        )
    });
    return (
        <div className={styles.todoListTask}>
            {tasksElements}
        </div>
    );
}

export default TodolistTasks;