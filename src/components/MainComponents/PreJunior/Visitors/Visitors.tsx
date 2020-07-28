import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import styles from './Visitors.module.css'
import HelloVisitor from "./HelloVisitor/HelloVisitor";
import {v1} from "uuid";
import AllVisitors from "./AllVisitors/AllVisitors";
import InputVisitorName from "./InputVisitorName/InputVisitorName";
import {type} from "os";
import {MyInput} from "../../../common/MyInput/MyInput";
import {MyButton} from "../../../common/MyButton/MyButton";

interface IVisitor {
    id: string,
    title: string
}

const Visitors = () => {

    const defaultVisitors: IVisitor[] = []

    const [visitors, setVisitors] = useState(defaultVisitors);

    const [title, setTitle] = useState("")

    const zeroFirstFormat = (value: any) => {
        if (value < 10) {
            value = "0" + value;
        }
        return value;
    }

    const getTime = () => {
        let date = new Date();
        return `${zeroFirstFormat(date.getHours())}:${zeroFirstFormat(date.getMinutes())}`
    }

    const [timeAdded, setTimeAdded] = useState(getTime())

    let [error, setError] = useState<string | null>(null)

    function addVisitor() {
        if (title.trim() !== "") {
            const visitor = {id: v1(), title: title}
            const newVisitors = [visitor, ...visitors]
            setVisitors(newVisitors)
            setTimeAdded(getTime)
            setTitle("")
        } else {
            setError("Title is required")
        }
    }


    const onChangeHandler = (value: string) => {
        setTitle(value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.charCode === 13) {
            addVisitor()
        }
    }

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.message}>
                <div>Enter your name:</div>
                <MyInput
                    placeholder="Имя своё введи"
                    value={title}
                    error={error}
                    onEnter={onKeyPressHandler}
                    onChange={onChangeHandler}
                />
                <MyButton onClick={addVisitor} name="ADD"/>
            </div>
            {visitors.length ?
                <div>
                    <HelloVisitor
                        title={visitors[setVisitors.length - 1] ? visitors[setVisitors.length - 1].title : ""}
                        name="Saveliy"
                        timeAdded={visitors[setVisitors.length - 1] ? timeAdded : ""}
                    />
                    Посетители:
                    <AllVisitors visitors={visitors}/>
                </div>
                :
                <div>
                    Посетители: нету
                </div>
            }
        </div>
    );
}

export default Visitors;
