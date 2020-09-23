let nextRecipeId = 0;

export const addRecipe = (text) => ({
  type: "ADD_RECIPE",
  id: nextRecipeId++,
  text,
});
