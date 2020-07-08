import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import styles from './Visitors.module.css'
import HelloVisitor from "./HelloVisitor/HelloVisitor";
import {v1} from "uuid";
import AllVisitors from "./AllVisitors/AllVisitors";
import InputVisitorName from "./InputVisitorName/InputVisitorName";
import {type} from "os";

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

    function addVisitor() {
        if (title !== "") {
            const visitor = {id: v1(), title: title}
            const newVisitors = [visitor, ...visitors]
            setVisitors(newVisitors)
            setTimeAdded(getTime)
            setTitle("")
        }
    }


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addVisitor()
        }
    }

    return (
        <div className={styles.message}>
            <div>
                <InputVisitorName
                    title={title}
                    //switchButtonState={switchButtonState}
                    onKeyPressHandler={onKeyPressHandler}
                    //error={error}
                    onChangeHandler={onChangeHandler}/>
                <button onClick={addVisitor}>ADD</button>
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
