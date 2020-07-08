import React, {ChangeEvent, useState} from "react";
import styles from "./TodoListTask.module.css";
import {FilterValuesType} from "../../Tuesday";
import { TaskType } from "../TodoListTasks";

type PropsType = {
    task: TaskType
    deleteTask: (taskId: number) => void
}

function TodoListTask (props: PropsType) {

    let [editMode, setEditMode] = useState(false)

    //let [timeBlock, setTimeBlock] = useState(false)

 /*   function onIsDoneChanged (e:any) {
        this.props.changeStatus(props.task.id, e.currentTarget.checked, props.task);
    };*/

   /* function onTitleChanged (e:any) {
        props.changeTitle(props.task.id, e.currentTarget.value);
    };*/

    function deleteThisTask () {
        props.deleteTask(props.task.id);
    };

  /*  function activateEditMode () {
        setEditMode(true)
    };
*/
    function deactivateEditMode () {
        setEditMode(false)
      //  setTimeBlock(false)
    }

    /*function showBlockTime () {
        setTimeBlock(true)
    }

    function hideBlockTime () {
        setTimeBlock(false)
    }*/

    /*function onPriorityChanged (e:any) {
        props.changePriority(props.task.id, e.currentTarget.value);
    }*/

        const todoListTask = props.task.isDone === true ? styles.done : "";
       // let blockTime = timeBlock === true ? styles.taskTime : styles.displayBlockNone;

        return (
            <div className={styles.todoListTask + " " + todoListTask}>
                <div className={styles.taskWrap}>
                    <input
                        type="checkbox"
                        checked={props.task.isDone}
                       // onChange={onIsDoneChanged}
                    />
                    {editMode
                        ? <input
                            type="text"
                            value={props.task.title}
                            autoFocus={true}
                            onBlur={deactivateEditMode}
                            //onChange={onTitleChanged}
                        />
                        :
                        <div className={styles.wordWrap}
                            /* onMouseOver={showBlockTime}
                             onMouseOut={hideBlockTime}*/
                             //onClick={this.activateEditMode}
                        >
                            {props.task.id}-{props.task.title}-priority:
                        </div>
                    }
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
                    <button
                        className={styles.deleteButton}
                        onMouseDown={deleteThisTask}>
                        X
                    </button>
                </div>
                {/*<div className={blockTime}>
                    <div>created:
                        {props.task.timeAdded}
                    </div>
                    <div>updated:
                        {props.task.timeUpdated}</div>
                    <div>finished:
                        {props.task.timeFinished}</div>
                </div>*/}
            </div>
        );
}

export default TodoListTask;
