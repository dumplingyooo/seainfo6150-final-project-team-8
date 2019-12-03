import React from "react";
<<<<<<< HEAD
=======
import styles from "./css/Detail.module.css";
>>>>>>> 5b40bd41a5b7cec7f9c8e6e431c2c3404ecb9517
const appetizerParams = require('../data/appetizer.json');
const mainParams = require('../data/main.json');
const dessertParams = require('../data/dessert.json');

<<<<<<< HEAD

export const Detail = ({item, back}) => {
    return(
        <div>
            <div>
                <h4>{item.name}</h4>
                <img src={item.image._url} alt={item.name}/>
                <h5>Ingredients</h5>
                <p>{item.ingredients}</p>
                <h5>Instructions</h5>
                <p>{item.directions}</p>
=======
export const Detail = ({item, back}) => {

    const ingredients = [];
    for(const [index,value] of item.ingredients.entries()){
        ingredients.push(
        <li key={index}>
            <label>
                <input type="checkbox" className={styles.cb}/>
                <span className={styles.mark}></span>
                <span className={styles.con}>{value}</span>
            </label>
        </li>);}

    const instructions = [];

    for(const [index, value] of item.directions.entries()){
        instructions.push(
        <li key={index}>
            <label>
                <input type="checkbox" className={styles.cb}/>
                <span className={styles.mark}></span>
                <span className={styles.con}>{value}</span>
            </label>
        </li>
    );}

    return(
        <div>
            <div className={styles.detailPage}>
                <h4>{item.name}</h4>
                <img className={styles.itemImage} src={item.image._url} alt={item.name}/>
                <h5>Ingredients</h5>
                <p>{ingredients}</p>
                <h5>Instructions</h5>
                <p>{instructions}</p>
>>>>>>> 5b40bd41a5b7cec7f9c8e6e431c2c3404ecb9517
            </div>
        </div>
    );
};

const Analyse = (props) =>{
    if (props.individual === "appetizer"){
        const item = appetizerParams.find(f => f.id === props.info);
        return <Detail item={item} back={props.individual}/>
<<<<<<< HEAD

=======
>>>>>>> 5b40bd41a5b7cec7f9c8e6e431c2c3404ecb9517
    }
    if (props.individual === "mainCourse"){
        const item = mainParams.find(f => f.id === props.info);
        return <Detail item={item} back={props.individual}/>
<<<<<<< HEAD

=======
>>>>>>> 5b40bd41a5b7cec7f9c8e6e431c2c3404ecb9517
    }
    if (props.individual === "dessert"){
        const item = dessertParams.find(f => f.id === props.info);
        return <Detail item={item} back={props.individual}/>
<<<<<<< HEAD

    }
    
=======
    }
>>>>>>> 5b40bd41a5b7cec7f9c8e6e431c2c3404ecb9517
}


export default Analyse;
// export default Detail;