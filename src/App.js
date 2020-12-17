import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCountries } from "./Actions/countries";
import { setGlobal } from "./Actions/global";
import Header from "./Components/Header";
import SimpleCardList from "./Components/SimpleCardList";
import Map from "./Components/Map";
import Summary from "./Components/Summary";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "./Components/spinner.gif";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "1200px",
  },
  header: {
    alignItems: "center",
  },
}));

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);

    fetch("http://www.disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => data.forEach((each) => dispatch(setCountries(each))));

    fetch("http://www.disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => dispatch(setGlobal(data)));
    setLoading(false);
  }, []);

  return (
    <center>
      <Grid container spacing={2} className={classes.root}>
        <Grid container item xs={8} className={classes.header}>
          <Header />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid container item spacing={2} xs={8}>
          <SimpleCardList />
          <Map />
        </Grid>
        <Grid container item spacing={2} xs={4}>
          <Summary />
        </Grid>
      </Grid>
    </center>
  );
};

export default App;
