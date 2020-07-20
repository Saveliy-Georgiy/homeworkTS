import React from "react";
import styles from "./TodoListTasks.module.css";
import TodoListTask from "./TodoListTask/TodoListTask";

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

function TodoListTasks(props: PropsType) {

    let tasksElements = props.tasks.map((task, index) => {
        return (
            <TodoListTask
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

export default TodoListTasks;