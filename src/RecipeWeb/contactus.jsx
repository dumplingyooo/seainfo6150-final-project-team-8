import React from 'react';
import styles from "./css/AddRecipe.module.css";

class contactus extends React.Component {
    constructor(){
        super();
        this.state = {
            username: "",
            advice: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = (e) =>{
        e.preventDefault();
	    alert(`Dear ${this.state.username}! We received your information, we will contact you soon!`);
    }

    render(){
        return (
            <div>
                <h3>Contact Us</h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Prefer Name:
                            <input required="required" value={this.state.username} onChange={this.handleChange} name="username" placeholder="type your name" maxlength="10"/>
                        </label><br />
                        <label>
                            E-mail:
                            <input required="required" type="email" name="email" placeholder="Please input your email" />
                        </label><br />
                        <label>
                            Select gender:<br />
                            <label>male<input type="radio" name="gender"/></label>
                            <label>female<input type="radio" name="gender"/></label>
                            <label>secret<input type="radio" name="gender"/></label>
                        </label><br />
                        <label>
                            Select Age group:  
                            <select>
                                <option value ="children">under 18</option>
                                <option value ="young">18 - 40</option>
                                <option value="old"> > 41</option>
						    </select>
                        </label><br />
                        <label>
                            Cooking Questions<br />
                            <textarea value={this.state.advice} onChange={this.handleChange} name="advice" rows="10" cols="30">Plese write down what you want to tell us here!</textarea>
                        </label>
                        <input type="submit" value="Add" />
                    </form>
                </div>
                <div>
                    <p>Site and Technical Questions</p>
                    <p>Questions about site content, features, technical issues, recipe errors, membership and billing:</p>
                    <p>xxxxx@xxxx.xxx</p>
                </div>
                <div>
                <p>Our Address</p>
                <p>xxxxxxxx</p>
                </div>
            </div>
        );
    }
};

export default contactus;


