const recipes = (state = [], action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        },
      ];

    default:
      return state;
  }
};

export default recipes;
