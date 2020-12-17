import React from "react";
import { useSelector } from "react-redux";
import SimpleCard from "./SimpleCard";
import Grid from "@material-ui/core/Grid";

const SimpleCardList = () => {
  const {
    cases,
    newCases,
    recovered,
    newRecovered,
    deaths,
    newDeaths,
  } = useSelector((state) => {
    if (state.choosenCountry === "World Wide") {
      return state.global;
    }
    const requiredCountry = state.countries.filter(
      (eachCountry) => eachCountry.name === state.choosenCountry
    )[0];
    return requiredCountry;
  });

  return (
    <Grid container item spacing={2}>
      <Grid item xs>
        <SimpleCard title="Covid virus cases" _new={newCases} total={cases} />
      </Grid>
      <Grid item xs>
        <SimpleCard title="Recovered" _new={newRecovered} total={recovered} />
      </Grid>
      <Grid item xs>
        <SimpleCard title="Deaths" _new={newDeaths} total={deaths} />
      </Grid>
    </Grid>
  );
};

export default SimpleCardList;
