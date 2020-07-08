import React from 'react';
import styles from "./AllVisitors.module.css";


type visitorsType = {
    id: string
    title: string
}

type PropsType = {
    visitors: Array<visitorsType>
}

const AllVisitors = (props: PropsType) => {

    return (
        <div className={styles.displayVisitors}>
            {
            props.visitors.map(v => {
            return (
                <div>
                   {v.title}
                </div>
            );
        })
            }
        </div>
    );

}

export default AllVisitors;