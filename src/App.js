import Axios from "axios";
import React, { useEffect, useState } from "react";
import './App.css';
import Recipe from "./components/Recipe";
import uuid from "react-uuid"
import Alert from "./components/Alert";

const App=()=> {
    const [search, setSearch]= useState("")
    const [query,setQuery]=useState('tomato');
    const [recipes,setRecipe] = useState([]);
    const [alert,setAlert] = useState("")
  
    const App_Id = "8c62ecf8";
    const App_key = "c676c85398cbb8e6a1c0c1e95fcc3619";
  
    const api_url = `https://api.edamam.com/search?q=${query}&app_id=${App_Id}&app_key=${App_key}`;
  
    useEffect(()=>{
      getRecipe()
    },[query])
  
    const getRecipe =async (e)=>{

      if(query !==""){
        const data=await Axios.get(api_url);
        if(!data.data.more){
          return setAlert("food search dont correct")
        }
        setRecipe(data.data.hits)
        setAlert("")
      }else{
        setAlert("enter recipe name")
      }
    }
    const onInputChange=e=>{
      setSearch(e.target.value)
    }
    const getSearch = e =>{
      e.preventDefault();
      setQuery(search)
      setSearch("")
    }
  return (
    <div className="App">
      <header className="App-header">
       <h1>food recipes</h1>
      </header>
      <form className="food-search" onSubmit={getSearch}>
        {alert !=="" && <Alert alert={alert}/>}
        <input 
          type="text" 
          placeholder="food recipes search here..." 
          autoComplete="off"
          onChange={onInputChange}
          value={search}/>
        <input type="submit" value="search"/>
      </form>
      <div className="recipes">
        {
          recipes !== [] && recipes.map(recipe=><Recipe key = {uuid()} recipe={recipe}/>)
        }
      </div>
    </div>
  );
}

export default App;
