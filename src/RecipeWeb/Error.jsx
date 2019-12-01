import React from 'react';
import error from "./404.jpg"
import styles from "./css/Error.module.css";
import {Link} from "react-router-dom";

const Error = () => {
    return (
        <div>
            <p>Oops!</p>
            <p>We can't seem to find the page you're looking for.</p>
            <p>Error code: 404</p>
            <p>Here are some helpful links instead:</p>
            <p>
            <Link className={styles.link_blue} to="/">
					Return to home
			</Link>
            </p>
            <p>
            <Link className={styles.link_blue} to="/AllCategories/appetizer">
					Return to appetizer
			</Link>
            </p>
            <Link className={styles.link_blue} to="/AllCategories/mainCourse">
					Return to mainCourse
			</Link>
            <p>
            <Link className={styles.link_blue} to="/AllCategories/dessert">
					Return to dessert
			</Link>
            </p>
            <img src={error} alt="404" title="404"></img>
        </div>
    )
}

export default Error;