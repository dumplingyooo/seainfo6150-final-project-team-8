import React from "react";
import { Link } from 'react-router-dom';


const allCategories = () => {
  return(
          <div>
          <h3>All Categories</h3>

          <div>This is All Categories!</div>
          <div>
          <Link to="/AllCategories/appetizer" >
          <div>Appetizer</div>
          </Link>
          <Link to="/AllCategories/mainCourse" >
          <div>Main Course</div>
          </Link>
          <Link to="/AllCategories/dessert" >
          <div>Desserts</div>
          </Link>
          </div>
        </div>
  )
}

export default allCategories;
