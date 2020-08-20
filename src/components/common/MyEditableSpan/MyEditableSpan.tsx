import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import styles from "./MyEditableSpan.module.css"
import {MyInput} from "../MyInput/MyInput";

type InputPropsType = {
    title: string
    placeholder: string
    onChange: (value: string) => void
}

export function MyEditableSpan(props: InputPropsType) {

    const [editMode, setEditMode] = useState<boolean>(false)

   // let [title, setTitle] = useState(props.title)

    const activateEditMode = () => {
        setEditMode(true)
       // setTitle(props.title)
    }

    const activateViewMode = () => {
        setEditMode(false)
        props.onChange(props.title)
    }

    return editMode ?
        <MyInput value={props.title} placeholder={props.placeholder} onChange={props.onChange} onBlur={activateViewMode}/>
        : <span onDoubleClick={activateEditMode}>{props.title}</span>

}
