import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCountries } from "./Actions/countries";
import { setGlobal } from "./Actions/global";
import SimpleCardList from "./Components/SimpleCardList";
import Map from "./Components/Map";
import Summary from "./Components/Summary";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "85%",
  },
  title: {
    margin: 20,
  },
}));

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://www.disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => dispatch(setCountries(data)));

    fetch("http://www.disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => dispatch(setGlobal(data)));
    //eslint-disable-next-line
  }, []);

  return (
    <center>
      <Typography variant="h4" className={classes.title}>
        COVID-19 TRACKER
      </Typography>
      <Grid container spacing={2} className={classes.root}>
        <SimpleCardList lg={3} xs={6} />
        <Map lg={9} xs={12} />
        <Summary lg={3} xs={12} />
      </Grid>
    </center>
  );
};

export default App;
