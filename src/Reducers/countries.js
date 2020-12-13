const init = [];

const countries = (state = init, action) => {
  switch (action.type) {
    case "SET_COUNTRIES":
      const item = {
        country: action.payload.country,
        lan: action.payload.countryInfo.lat,
        lon: action.payload.countryInfo.long,
        flag: action.payload.countryInfo.flag,
        cases: action.payload.cases,
        newCases: action.payload.todayCases,
        recovered: action.payload.recovered,
        newRecovered: action.payload.todayRecovered,
        deaths: action.payload.deaths,
        newDeaths: action.payload.todayDeaths,
      };
      console.log(item);
      return [...state, item];

    default:
      return state;
  }
};

export default countries;
