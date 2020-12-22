const init = "deaths";

const option = (state = init, action) => {
  switch (action.type) {
    case "SET_OPTION":
      return action.payload;

    default:
      return state;
  }
};

export default option;
