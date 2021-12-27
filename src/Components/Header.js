import React from "react";
import styles from '../AppStyles.module.css';


const Header = (props) => {
    return(
        <h1 className={styles.title}>EMPLOYEE FEEDBACK {props.name}</h1>
    )
}

export default Header;