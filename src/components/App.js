import React from "react";
import AddRecipeContainer from "../containers/AddRecipeContainer";
import RecipeListContainer from "../containers/RecipeListContainer";

function App() {
  return (
    <div className="App">
      <RecipeListContainer />
      <AddRecipeContainer />
    </div>
  );
}

export default App;
