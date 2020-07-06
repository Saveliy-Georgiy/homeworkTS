import React from 'react';
import styles from './NavLink.module.css';
import {NavLink} from "react-router-dom";
import {dayOfWeekType} from "../Navbar";

type PropsType = {
    dayOfWeek: dayOfWeekType,
    onClick: (e: any) => void
}

const Navlink = (props: PropsType) => {
    return (
        <div className={styles.item}>
            <NavLink to={props.dayOfWeek.link} activeClassName={styles.activeLink}
                     onClick={props.onClick}>{props.dayOfWeek.title}</NavLink>
        </div>
    )
};

export default Navlink;