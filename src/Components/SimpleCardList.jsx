import React from "react";
import { useSelector } from "react-redux";
import SimpleCard from "./SimpleCard";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";

const SimpleCardList = ({ lg, xs }) => {
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
    <Grid item container spacing={2}>
      <Grid item lg={lg} xs={xs}>
        <SimpleCard title="Covid virus cases" _new={newCases} total={cases} />
      </Grid>
      <Grid item lg={lg} xs={xs}>
        <SimpleCard title="Recovered" _new={newRecovered} total={recovered} />
      </Grid>
      <Grid item lg={lg} xs={xs}>
        <SimpleCard title="Deaths" _new={newDeaths} total={deaths} />
      </Grid>
      <Grid item lg={lg} xs={xs}>
        <Header />
      </Grid>
    </Grid>
  );
};

export default SimpleCardList;
