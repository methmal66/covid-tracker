import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LineGraph from "./LineGraph";
import { sortBy, formatNumber } from "../util.js";

let option;
const useStyles = makeStyles((theme) => ({
  root: {
    height: "638px",
  },
  table: {
    margin: "5px",
    height: "440px",
    overflow: "scroll",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    "&:nth-child(even)": {
      backgroundColor: "#f2f2f2",
    },
  },
}));

const Summary = ({ lg, xs }) => {
  const classes = useStyles();
  const sortedCountries = useSelector((state) => {
    const { countries } = state;
    option = state.option;
    countries.sort(sortBy(option)).reverse();
    return countries;
  });

  const table = () => {
    const rowElements = sortedCountries.map((country) => (
      <tr className={classes.row}>
        <td>{country.name}</td>
        <td>{formatNumber(country[option])}</td>
      </tr>
    ));
    return rowElements;
  };

  return (
    <Grid item lg={lg} xs={xs}>
      <Paper className={classes.root}>
        <h3>Live cases by country</h3>
        <div className={classes.table}>{table()}</div>
        <span>daily growth</span>
        <LineGraph />
      </Paper>
    </Grid>
  );
};

export default Summary;
