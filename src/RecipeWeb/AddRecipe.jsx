import React from "react";
import styles from "./css/AddRecipe.module.css";
import {Link} from "react-router-dom";

class AddRecipe extends React.Component {
	constructor() {
		super();
		this.state = {
			title: "",
			ingredients: "",
			instructions: "",
		}

	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
	    this.setState({ [event.target.name]: event.target.value});
	}

	handleSubmit = (e) => {
		e.preventDefault();
	    alert(`We received your recipe ${this.state.title}!`);
	}

	render () {
		return (
			<div id={styles.add_recipe_page}>
				<h3>Add Recipe</h3>

				<form className={styles.add_form} onSubmit={this.handleSubmit}>
					<label className={styles.to_send}>
						Choose Category:
						<select>
							<option value ="appetizer">Appetizer</option>
							<option value ="main">Main Course</option>
							<option value="dessert">Dessert</option>
						</select>
					</label>
					<label className={styles.to_send}>
					  Title:
					  <input required="required" value={this.state.title} onChange={this.handleChange} name="title"/>
					</label>
					<label className={styles.to_send}>
					  Ingredients List:
					  <textarea required="required" value={this.state.ingredients} onChange={this.handleChange} name="ingredients"/>
					</label>
					<label className={styles.to_send}>
					  Instructions:
					  <textarea required="required" value={this.state.instructions} onChange={this.handleChange} name="instructions"/>
					</label>				
					<input type="submit" value="Add" />
				</form>
				<Link className={styles.link_blue} to="/">
					Return to home
				</Link>					
			</div>
		)
	}
}


export default AddRecipe;