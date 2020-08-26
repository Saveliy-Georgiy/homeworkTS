import React, {useEffect, useState} from "react";
import styles from './MyRadio.module.css'

type ItemType = {
    title: string
    id: string
}

type RadioPropsType = {
    value: string
    onChange: (value: string) => void
    items: ItemType[]
    name: string
}

export function MyRadio(props: RadioPropsType) {

    const onItemClick = (value: string) => {
        props.onChange(value);
    }

    return (
        <div>
            {
                <div>
                    {
                        props.items.map(i => {
                            return <div>
                                <input
                                    type="radio"
                                    name={props.name}
                                    key={i.id}
                                    value={props.value}
                                    onClick={() => {onItemClick(i.title)}}/>
                                <span>{i.title}</span>
                            </div>
                        })
                    }
                </div>
            }
        </div>
    )
}