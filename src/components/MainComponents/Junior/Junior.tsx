import React, {useState} from 'react';
import styles from './Junior.module.css'
import {MyEditableSpan} from "../../common/MyEditableSpan/MyEditableSpan";
import {restoreState, saveState} from "../../../brouserFunctions/brouserFunctions";
import {MySelect} from '../../common/MySelect/MySelect';
import {MyRadio} from "../../common/MyRadio/MyRadio";
import {v1} from "uuid";
import {MyButton} from "../../common/MyButton/MyButton";
import {initialState, PeopleType, SortPeopleUpAC} from "../../reducers/homeWorkReducer";

type StateType = {
    title: string
}

const countries = [
    {value: "1", title: "Moscow"},
    {value: "2", title: "Kiev"},
    {value: "3", title: "Minsk"}
]
const communicationMeans = [
    {id: v1(), title: "Email"},
    {id: v1(), title: "Phone"},
    {id: v1(), title: "Mail"}
]

const Junior = () => {

    const [title, setTitle] = useState("я обычный спан")

    const onChangeHandler = (value: string) => {
        setTitle(value)
    }
//* использование:
    const saveTitle = () => {
        saveState<StateType>("title", {title: title});
    }

// сохраняем объект типа StateType в ячейке "test"
    const restoreTitle = () => {
        const state: StateType = restoreState<StateType>("title", {title: title});
        setTitle(state.title)
    }
// получем в переменную state объект из ячейки "test" или дэфолтный объект если ячейка пуста

    const [selected, setSelected] = useState('2');

    const [radioSelected, setRadioSelected] = useState("Email");

    /*const [people, setPeople] = useState<Array<PeopleType>>([
        {id: v1(), name: "Saveliy", age: 20},
        {id: v1(), name: "Dima", age: 34},
        {id: v1(), name: "Vanya", age: 15},
        {id: v1(), name: "Dan", age: 45},
        {id: v1(), name: "Zed", age: 12},
    ])*/

    const SortPeopleUp = () => {
        SortPeopleUpAC()
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainWrapper}>
                <MyEditableSpan title={title} placeholder="write something here" onChange={onChangeHandler}/>
                <MyButton onClick={saveTitle} name="save value"/>
                <MyButton onClick={restoreTitle} name="restore value"/>
            </div>
            <div>
                <span>Choose your city</span>
                <MySelect value={selected}
                          items={countries}
                          onChange={setSelected}/>
            </div>
            <span>Please select your preferred contact method:</span>
            <MyRadio
                name="contacts"
                value={radioSelected}
                onChange={setRadioSelected}
                items={communicationMeans}/>
            <div>

                   {initialState.people.map(p => {
                       return <div>Name: {p.name}, age: {p.age}</div>
                   })}

                <button onChange={SortPeopleUp}>sort A-Z</button>
                <button>sort Z-A</button>
            </div>
        </div>
    );
}

export default Junior;
