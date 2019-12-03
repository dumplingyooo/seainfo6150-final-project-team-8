import React from "react";
import { Link } from 'react-router-dom';
import styles from "./css/AllCategories.module.css";
import dessert from "./css/dessert.jpg";
import appetizer from "./css/appetizer.jpg";
import mainCourse from "./css/mainCourse.jpg";
const allCategories = () => {
  return(
          <div className={styles.allCategoriesPage}>
          <h3>All Categories</h3>
          <div className={styles.allCategories}>
            <div className={styles.individualCategory}>
              <img className={styles.img} src={appetizer} alt="appetizer" title="appetizer"></img>
              <Link  className={styles.link} to="/AllCategories/appetizer" >
                <div>Appetizer</div>
              </Link>
            </div>
            <div className={styles.individualCategory}>
              <img className={styles.img} src={mainCourse} alt="mainCourse" title="mainCourse"></img>
              <Link  className={styles.link} to="/AllCategories/mainCourse" >
                <div>Main Course</div>
              </Link>
            </div>
            <div className={styles.individualCategory}>
              <img className={styles.img} src={dessert} alt="dessert" title="dessert"></img>
              <Link  className={styles.link} to="/AllCategories/dessert" >
                <div>Desserts</div>
              </Link>
            </div>
          </div>
          {/*<div>These are all categories.</div>*/}
        </div>
  )
}

export default allCategories;
