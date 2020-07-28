import React, {useState} from 'react';
import styles from "./Navbar.module.css";
import Navlink from "./Navlink/NavLink";

export type PagesType = {
    title: string,
    link: string,
    style: string
}

type PropsType = {
    pages: Array<PagesType>
}

function Navbar(props: PropsType) {

    let [activeLink, setActiveLink] = useState("")

    function activateLink (e:any) {
        setActiveLink (e.currentTarget.textContent)
    }

        let NavLinks = props.pages.map((pages, key) => {
            return (<Navlink
                key={key}
                pages={pages}
                onClick={activateLink}
            />);
        });
        return (
            <nav className={styles.nav}>
                {NavLinks}
            </nav>);
}

export default Navbar;