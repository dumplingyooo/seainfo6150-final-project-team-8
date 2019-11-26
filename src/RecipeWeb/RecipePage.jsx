import React from 'react';
import { Link } from 'react-router-dom';
const appetizerParams = require('../data/appetizer.json');
const mainParams = require('../data/main.json');
const dessertParams = require('../data/dessert.json');


// const RecipePage  = (props) => {
// 	return(
// 		<div>
// 			<h3>{props.individual}</h3>
// 			<div>This is {props.individual}!</div>
// 			<div>
// 			<Link to={`/AllCategories/${props.individual}/${appetizerParams[0].id}`} >
// 			<div>detail 1</div>
// 			</Link>
// 			<Link to={`/AllCategories/${props.individual}/:info`} >
// 			<div>detail 2</div>
// 			</Link>
// 			<Link to={`/AllCategories/${props.individual}/:info`} >
// 			<div>detail 3</div>
// 			</Link>
// 			<Link to={`/AllCategories/${props.individual}/:info`} >
// 			<div>detail 4</div>
// 			</Link>
// 			<Link to={`/AllCategories/${props.individual}/:info`} >
// 			<div>detail 5</div>
// 			</Link>
// 			</div>
// 		</div>
// 	)

// }



//2
// const RecipePage  = (props) => {
// 	return(
// 		<div>
// 			<h3>{props.individual}</h3>
// 			<div>This is {props.individual}!</div>
// 			<div>
// 				{variable.map(para =>(
// 					<Link to={`/AllCategories/${props.individual}/${para.id}`} >
// 					<div>{para.name}</div>
// 					</Link>
// 				))}
// 			</div>
// 		</div>
// 	)
// }

export const RecipePage  = ({head, paras}) => {
	return(
		<div>
			<h3>{head}</h3>
			<div>This is {head}!</div>
			<div>
				{paras.map(para =>(
					<Link to={`/AllCategories/${head}/${para.id}`} >
					<div>{para.name}</div>
					</Link>
				))}
			</div>
		</div>
	)
}


const IndividualPage = (props) => {
	if (props.individual === "appetizer"){
		return <RecipePage head={props.individual} paras={appetizerParams}/>
	}
	if (props.individual === "mainCourse"){
		return <RecipePage head={props.individual} paras={mainParams}/>
	}
	if (props.individual === "dessert"){
		return <RecipePage head={props.individual} paras={dessertParams}/>
	}	
}


export default IndividualPage;