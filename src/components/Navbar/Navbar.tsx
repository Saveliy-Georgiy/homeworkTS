import React, {useState} from "react";
import styles from "./Navbar.module.css";
import Navlink from "./Navlink/NavLink";

export type dayOfWeekType = {
    title: string,
    link: string,
    style: string
}

type PropsType = {
    daysOfWeek: Array<dayOfWeekType>
}

function Navbar(props: PropsType) {

    let [activeLink, setActiveLink] = useState("")

    function activateLink (e: any) {
        setActiveLink (e.currentTarget.textContent)
    }

        let NavLinks = props.daysOfWeek.map((dayOfWeek) => {
            return (<Navlink
                dayOfWeek={dayOfWeek}
                onClick={activateLink}
            />);
        });
        return (
            <nav className={styles.nav}>
                {NavLinks}
            </nav>);
}

export default Navbar;