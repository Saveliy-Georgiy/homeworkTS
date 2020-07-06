import React, {useState} from "react";
import styles from "./Tuesday.module.css";
import TodoListHeader from "./TodoListHeader/TodoListHeader";
import TodoListTasks from "./TodoListTasks/TodoListTasks";
import TodoListFooter from "./TodoListFooter/TodoListFooter";

export type FilterValuesType = "all" | "active" | "completed";

function Tuesday () {

    let [tasks, setTasks] = useState([
        {id: 0, title: "CSS", isDone: true, priority: "low"},
        {id: 1, title: "JS", isDone: true, priority: "medium"},
        {id: 2, title: "ReactJS", isDone: false, priority: "high"},
    ])

    let [filterValue, setFilterValue] = useState<FilterValuesType>("all")

    let [taskId, setTaskId] = useState(2)

    let tasksForTodolist = tasks;

    if(filterValue==="active") {
        tasksForTodolist = tasks.filter(t => t.isDone===false)
    }
    if(filterValue==="completed") {
        tasksForTodolist = tasks.filter(t => t.isDone===true)
    }

    function addTask (newText: string) {

        let newTask = {
            id: taskId++,
            title: newText,
            isDone: false,
            priority: "high",
        };

        //let newTasks = this.state.tasks.push(newTask);
        let newTasks = [...tasks, newTask];
        setTasks(newTasks) //????
    }

    function changeFilter(value: FilterValuesType) {
        setFilterValue(value)
    }

    function deleteTask (removedId : number) {
        let newTasks = tasks.filter(t => t.id !== removedId);
        setTasks(newTasks)
    }

        return (
            <div>
                <div className={styles.todoList}>
                    <TodoListHeader addTask={addTask}/>
                    <TodoListTasks
                        deleteTask={deleteTask}
                        tasks={tasksForTodolist}
                    />
                    <TodoListFooter
                        changeFilter={changeFilter}
                    />
                </div>
            </div>
        );
}

export default Tuesday;
