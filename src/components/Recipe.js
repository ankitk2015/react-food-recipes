import React, { useState } from "react";
import RecipeDetail from "./RecipeDetail";

const Recipe = ({recipe}) =>{
    const [show,setShow]=useState(false);

    const {label,image,url,ingredients,source}=recipe.recipe;

    return(
        <div className="display-recipes">
            <img src={image} alt={label}/>
            <p className="label">{label.length <20 ? `${label}`:`${label.substring(0,25)}...`}</p>
            <p>
                <strong>Source : </strong>
                <a href={url} target="_blank" rel="noreferrer">{source}</a>
            </p><br/>
            <button onClick={()=>setShow(!show )}>ingredints</button>
            {show && <RecipeDetail ingredients={ingredients}/>}
        </div>
    )
}
export default Recipe;