import React from 'react';
import styles from "./css/about.module.css";
import yummy from "./yummy.jpg";
const about = (props) => {
    return (
        <div className={styles.aboutbody}>
         <h1 className={styles.abouttitle}>About</h1>
            <img className={styles.img} src={yummy} alt="yummy" title="yummy"></img>

        <p>
            Many cultures enjoy full course meals with variations of courses, different customs,
            and unique assortments of food. Full course meals have a rich, diverse history from
            many regions that is a result of evolving eating traditions over time. To the Western
            world, the full course meal might bring to mind lavish dinner parties or long meals
            at a fancy restaurant. But how many courses should be in a full course meal, and what
            should each course consist of? Below, we provide basic information about full course
            meals in the tradition of Western cultures and go through typical meal course sequences.
        </p>



        </div>

    );
};

export default about;