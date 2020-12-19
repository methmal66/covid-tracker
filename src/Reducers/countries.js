const init = [];

const countries = (state = init, action) => {
  switch (action.type) {
    case "SET_COUNTRIES":
      const countries = action.payload.map((dataItem) => ({
        name: dataItem.country,
        lat: dataItem.countryInfo.lat,
        lng: dataItem.countryInfo.long,
        flag: dataItem.countryInfo.flag,
        cases: dataItem.cases,
        newCases: dataItem.todayCases,
        recovered: dataItem.recovered,
        newRecovered: dataItem.todayRecovered,
        deaths: dataItem.deaths,
        newDeaths: dataItem.todayDeaths,
      }));
      return countries;

    default:
      return state;
  }
};

export default countries;
