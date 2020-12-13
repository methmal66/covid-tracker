import React from "react";
import { useSelector } from "react-redux";
import SimpleCard from "./SimpleCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
  },
}));

const SimpleCardList = () => {
  const classes = useStyles();
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
    <div className={classes.root}>
      <SimpleCard
        title="Covid virus cases"
        _new={formatNumber(newCases)}
        total={formatNumber(cases)}
      />
      <SimpleCard
        title="Recovered"
        _new={formatNumber(newRecovered)}
        total={formatNumber(recovered)}
      />
      <SimpleCard
        title="Deaths"
        _new={formatNumber(newDeaths)}
        total={formatNumber(deaths)}
      />
    </div>
  );
};

export default SimpleCardList;
