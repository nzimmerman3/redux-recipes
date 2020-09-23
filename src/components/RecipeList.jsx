import React from "react";
import Recipe from "./Recipe";

const RecipeList = ({ recipes }) => {
  return (
    <div className="RecipeList">
      <ul>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} text={recipe.text} />;
        })}
      </ul>
    </div>
  );
};

export default RecipeList;
