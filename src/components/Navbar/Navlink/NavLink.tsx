import React from 'react';
import styles from './NavLink.module.css';
import {NavLink} from "react-router-dom";
import {PagesType} from "../Navbar";

type PropsType = {
    pages: PagesType,
    onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

const Navlink = (props: PropsType) => {
    return (
        <div className={styles.item}>
            <NavLink to={props.pages.link} activeClassName={styles.activeLink}
                     onClick={props.onClick}>{props.pages.title}</NavLink>
        </div>
    )
};

export default Navlink;