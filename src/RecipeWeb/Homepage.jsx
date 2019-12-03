import React from "react";
<<<<<<< HEAD
import styles from "./Homepage.module.css";
import logo from "./logo.jpg";
import {Link} from "react-router-dom";
=======
import styles from "./css/Homepage.module.css";
import logo from "./logo.jpg";
//import {Link} from "react-router-dom";
>>>>>>> 5b40bd41a5b7cec7f9c8e6e431c2c3404ecb9517

// const Homepage = () => {
// 	return (
// 		<div className={styles.homepage}>
// 			<div className={styles.nav}>
// 				<ul className={styles.nav_links}>
// 					<Link className={styles.link_white} to="/AllCategories">
// 						<li>All Categories</li>
// 					</Link>
<<<<<<< HEAD
// 					<Link className={styles.link_white} to="/AddRecipe">
=======
// 					<Link className={styles.link_white} to="/AddRecipe"> 
>>>>>>> 5b40bd41a5b7cec7f9c8e6e431c2c3404ecb9517
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
<<<<<<< HEAD
			<div className={styles.nav}>
				<div className={styles.logo}>
					<img className={styles.img} src={logo} alt="logo" title="logo"></img>
				</div>
=======
			<div className={styles.logo}>
				<img className={styles.img} src={logo} alt="logo" title="logo"></img>
>>>>>>> 5b40bd41a5b7cec7f9c8e6e431c2c3404ecb9517
			</div>
		</div>
	);
}


export default Homepage;