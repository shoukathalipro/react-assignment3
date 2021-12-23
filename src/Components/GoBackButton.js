import React, { Component } from "react";
import styles from '../AppStyles.module.css';



class GoBack extends Component {
    render() {
        return(
            <div className={styles.btnContainer}>
                {this.props.children}
            </div>
        )
    }
}

export default GoBack;