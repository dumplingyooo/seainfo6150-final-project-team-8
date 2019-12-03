import React from 'react';
<<<<<<< HEAD

const contactus = (props) => {
    return (
        <div>
            <h3>Contact Us</h3>
            <div>
                <form>
                    <label>
                        Cooking Questions
                        <input type="text" id="questions" name="questions" placeholder="type your questions"/>
                    </label>
                    <button onClick={
                        ()=>alert(`${props.slug}`)
                    }>{props.buttonText}</button>
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
=======
import styles from "./css/contactus.module.css";

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
            <div className={styles.body}>
                <h3 className={styles.contacttitle}>Contact Us</h3>
                <div>
                    <form className={styles.form} onSubmit={this.handleSubmit}>
                        <label>
                            Prefer Name:
                            <input required="required" type="name" value={this.state.username} onChange={this.handleChange} name="username" placeholder="enter your name" maxLength="10"/>
                        </label><br />
                        <label>
                            E-mail:
                            <input required="required" type="email" name="email" placeholder="enter your email" />
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
                        <br/>
                        <input className={styles.button} type="submit" value="Add" />
                    </form>
                </div>
                <div className={styles.letter}>
                    <p>Site and Technical Questions</p>
                    <p>Questions about site content, features, technical issues, recipe errors, membership and billing:</p>
                    <p>xxxxx@xxxx.xxx</p>
                <div>
                <p>Our Address</p>
                <p>xxxxxxxx</p>
                </div>
                </div>
            </div>
        );
    }
>>>>>>> 5b40bd41a5b7cec7f9c8e6e431c2c3404ecb9517
};

export default contactus;


