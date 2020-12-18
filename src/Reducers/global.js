const init = {};

const global = (state = init, action) => {
  switch (action.type) {
    case "SET_GLOBAL":
      console.log("global is set");
      return {
        cases: action.payload.cases,
        newCases: action.payload.todayCases,
        recovered: action.payload.recovered,
        newRecovered: action.payload.todayRecovered,
        deaths: action.payload.deaths,
        newDeaths: action.payload.todayDeaths,
      };

    default:
      return state;
  }
};

export default global;
