import React from "react";
import styles from "./css/Homepage.module.css";
import logo from "./logo.jpg";
//import {Link} from "react-router-dom";

// const Homepage = () => {
// 	return (
// 		<div className={styles.homepage}>
// 			<div className={styles.nav}>
// 				<ul className={styles.nav_links}>
// 					<Link className={styles.link_white} to="/AllCategories">
// 						<li>All Categories</li>
// 					</Link>
// 					<Link className={styles.link_white} to="/AddRecipe"> 
// 						<li>Add Recipe</li>
// 					</Link>
// 				 	<Link className={styles.link_white} to="/About">
// 						<li>About</li>
// 				 	</Link>
// 				 	<Link className={styles.link_white} to="/Contact">
// 						<li>Contact</li>
// 				 	</Link>
// 				</ul>
// 				<div className={styles.logo}>
// 					<img className={styles.img} src={logo} alt="logo" title="logo"></img>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }


const Homepage = () => {
	return (
		<div className={styles.homepage}>
			<div className={styles.logo}>
				<img className={styles.img} src={logo} alt="logo" title="logo"></img>
			</div>
		</div>
	);
}


export default Homepage;