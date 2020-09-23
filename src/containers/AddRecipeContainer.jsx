import React from "react";
import { connect } from "react-redux";
import { addRecipe } from "../actions";

let AddRecipeContainer = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addRecipe(input.value));
          input.value = "";
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

AddRecipeContainer = connect()(AddRecipeContainer);

export default AddRecipeContainer;
