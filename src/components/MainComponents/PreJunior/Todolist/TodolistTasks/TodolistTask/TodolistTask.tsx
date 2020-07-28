import React, {ChangeEvent} from "react";
import styles from "./TodolistTask.module.css";
import {TaskType} from "../TodolistTasks";
import {MyCheckbox} from "../../../../../common/MyCheckbox/MyCheckbox";
import {MyButton} from "../../../../../common/MyButton/MyButton";

type PropsType = {
    task: TaskType
    deleteTask: (taskId: string) => void
    changeStatus: (taskId: string, isDone: boolean) => void
}

function TodolistTask(props: PropsType) {

   /* let [editMode, setEditMode] = useState(false)*/

    //let [timeBlock, setTimeBlock] = useState(false)

    /*   function onIsDoneChanged (e:any) {
           this.props.changeStatus(props.task.id, e.currentTarget.checked, props.task);
       };*/

    /* function onTitleChanged (e:any) {
         props.changeTitle(props.task.id, e.currentTarget.value);
     };*/

    function deleteThisTask() {
        props.deleteTask(props.task.id);
    };

    /*  function activateEditMode () {
          setEditMode(true)
      };
  */
   /* function deactivateEditMode() {
        setEditMode(false)
        //  setTimeBlock(false)
    }*/

    /*function showBlockTime () {
        setTimeBlock(true)
    }

    function hideBlockTime () {
        setTimeBlock(false)
    }*/

    /*function onPriorityChanged (e:any) {
        props.changePriority(props.task.id, e.currentTarget.value);
    }*/

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        //let newIsDoneValue = e.currentTarget.checked
        props.changeStatus(props.task.id, e.currentTarget.checked)
    }

    const todoListTask = props.task.isDone === true ? styles.done : "";
    // let blockTime = timeBlock === true ? styles.taskTime : styles.displayBlockNone;

    return (
        <div className={styles.todoListTask + " " + todoListTask}>
            <div className={styles.taskWrap}>
                <MyCheckbox
                    checked={props.task.isDone}
                    onChange={onChangeHandler}
                />
                <span>{props.task.title}-priority:</span>
                <div>
                    <select
                        className={styles.selector}
                        //value={props.task.priority}
                        // onChange={onPriorityChanged}
                    >
                        <option>high</option>
                        <option>medium</option>
                        <option>low</option>
                    </select>
                </div>
            <MyButton onClick={deleteThisTask} name="X"/>
            </div>
            </div>
    );
}

export default TodolistTask;
