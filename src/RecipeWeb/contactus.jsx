import React from 'react';

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
};

export default contactus;


