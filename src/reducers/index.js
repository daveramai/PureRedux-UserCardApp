export default (state, action) => {
  switch (action.type) {
    case "UPDATE_LIKES":
      return {
        ...state,
        likes: state.likes + ", " + action.text,
      };
    default:
      return state;
  }
};
