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
  } = useSelector((state) => state.global);

  const formatNumber = (num = 0) => {
    const stringNumber = num.toString();
    const formattedNumber = stringNumber.replace(
      /(\d)(?=(\d{3})+(?!\d))/g,
      "$1,"
    );
    return formattedNumber;
  };

  return (
    <Grid container item spacing={2}>
      <Grid item xs>
        <SimpleCard
          title="Covid virus cases"
          _new={formatNumber(newCases)}
          total={formatNumber(cases)}
        />
      </Grid>
      <Grid item xs>
        <SimpleCard
          title="Recovered"
          _new={formatNumber(newRecovered)}
          total={formatNumber(recovered)}
        />
      </Grid>
      <Grid item xs>
        <SimpleCard
          title="Deaths"
          _new={formatNumber(newDeaths)}
          total={formatNumber(deaths)}
        />
      </Grid>
    </Grid>
  );
};

export default SimpleCardList;
