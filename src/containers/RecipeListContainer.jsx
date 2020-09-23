import React from "react";
import { connect } from "react-redux";
import RecipeList from "../components/RecipeList";

export const RecipeListContainer = (recipes) => {
  return <div></div>;
};

//transform store into props for RecipeList component
const mapStateToProps = (state) => ({
  recipes: state.recipes,
});

//returns callback props that I can inject into RecipeList component
//TODO
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
