import logo from './logo.svg';
import './App.css';
import recipes from "./data/recipes.json";
import React, { useState } from 'react';

function App() {

  const [ingredients, setIngredients] = useState({});
  
  var addRecipe= (id)=>{
    
    var sum = {...ingredients};
    var ings = recipes.find((el)=>el.id==id).ingredients
    for(var i=0;i<ings.length;i++){
      var split = ings[i].split(" ")
      if(sum[split[1]]) {sum[split[1]]+= parseInt(split[0])}
      else {sum[split[1]]=parseInt(split[0])}
    }

    setIngredients(sum);

  }
  return (
    <>
      <div>
        

          <h1>Recettes</h1>
          {
          recipes.map(el => {
            return (
            <div>
                <p>{el.name}</p>
                <button onClick={()=>addRecipe(el.id)}>Ajouter</button>
            </div>
            )
          })
        }
      </div>

      <h1>Liste de Course</h1>
        {
          Object.keys(ingredients).map(el=>{
            return(<>
            <p>{el} : {ingredients[el]}</p>
            </>
            ) 
          }
          )}
    </>
  );
}

export default App;
