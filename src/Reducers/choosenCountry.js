const init = "World Wide";

const choosenCountry = (state = init, action) => {
  switch (action.type) {
    case "SET_CHOOSEN_COUNTRY":
      return action.payload;

    default:
      return state;
  }
};

export default choosenCountry;
