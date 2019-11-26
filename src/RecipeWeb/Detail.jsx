import React from "react";
const appetizerParams = require('../data/appetizer.json');
const mainParams = require('../data/main.json');
const dessertParams = require('../data/dessert.json');


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
            </div>
        </div>
    );
};

const Analyse = (props) =>{
    if (props.individual === "appetizer"){
        const item = appetizerParams.find(f => f.id === props.info);
        return <Detail item={item} back={props.individual}/>

    }
    if (props.individual === "mainCourse"){
        const item = mainParams.find(f => f.id === props.info);
        return <Detail item={item} back={props.individual}/>

    }
    if (props.individual === "dessert"){
        const item = dessertParams.find(f => f.id === props.info);
        return <Detail item={item} back={props.individual}/>

    }
    
}


export default Analyse;
// export default Detail;