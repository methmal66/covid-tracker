import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import LineGraph from "./LineGraph";
import { sortFunction, formatNumber } from "../util.js";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "638px",
  },
  table: {
    height: "350px",
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

const Summary = () => {
  const classes = useStyles();
  const data = useSelector((state) => {
    const foundData = state.countries.map((eachCountry) => [
      eachCountry.name,
      eachCountry.cases,
    ]);
    foundData.sort(sortFunction).reverse();
    return foundData;
  });

  const table = () => {
    const rowElements = data.map((eachData) => (
      <tr className={classes.row}>
        <td>{eachData[0]}</td>
        <td>{formatNumber(eachData[1])}</td>
      </tr>
    ));
    return rowElements;
  };

  return (
    <Grid item xs>
      <Card className={classes.root}>
        <Typography>
          <h3>Live cases by country</h3>
        </Typography>
        <CardContent className={classes.table}>{table()}</CardContent>
        <Typography>
          <span>daily growth</span>
        </Typography>
        <CardContent>
          <LineGraph />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Summary;
