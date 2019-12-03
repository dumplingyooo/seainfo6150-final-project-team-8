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
                <div className={styles.divcss5}>
                  <img src={appetizer} alt="appetizer" title="appetizer"></img>
                  <a href="/AllCategories/appetizer" className={styles.now}></a>
                  <span>See Appetizer</span>
                </div>
                
                <Link  className={styles.link} to="/AllCategories/appetizer" >
                  <div>Appetizer</div>
                </Link>
              </div>

              <div className={styles.individualCategory}>
                <div className={styles.divcss5}>
                  <img src={mainCourse} alt="mainCourse" title="mainCourse"></img>
                  <a href="/AllCategories/mainCourse" className={styles.now}></a>
                  <span>See MainCourse</span>
                </div>
                <Link  className={styles.link} to="/AllCategories/mainCourse" >
                  <div>Main Course</div>
                </Link>
              </div>

              <div className={styles.individualCategory}>
                <div className={styles.divcss5}>
                  <img className={styles.img} src={dessert} alt="dessert" title="dessert"></img>
                  <a href="/AllCategories/dessert" className={styles.now}></a>
                  <span>See Desserts</span>
                </div>
                <Link  className={styles.link} to="/AllCategories/dessert" >
                  <div>Desserts</div>
                </Link>
              </div>

            </div>
        </div>
  )
}

export default allCategories;
