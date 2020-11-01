import React from "react";
import uuid from "react-uuid";

const RecipeDetail = ({ingredients}) =>{
    return ingredients.map(ingredient=>{
        return(
            <ul key={uuid()} className="ingredient-list">
                <li className="ingredient-text">{ingredient.text}</li>
                <li className="ingredient-weight">Weight : {ingredient.weight}</li>
            </ul>
        )
    })
}
export default RecipeDetail;