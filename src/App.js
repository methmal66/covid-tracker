import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCountries } from "./Actions/countries";
import { setGlobal } from "./Actions/global";
import SimpleCardList from "./Components/SimpleCardList";
import LeafletMap from "./Components/LeafletMap";
import Summary from "./Components/Summary";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "./Components/spinner.gif";

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
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("http://www.disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => dispatch(setCountries(data)));

    fetch("http://www.disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => dispatch(setGlobal(data)));
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div>
        <img src="Components/spinner.gif" alt="spinner" />
      </div>
    );
  }

  return (
    <center>
      <Typography variant="h4" className={classes.title}>
        COVID-19 TRACKER
      </Typography>
      <Grid container spacing={2} className={classes.root}>
        <SimpleCardList lg={3} xs={6} />
        <LeafletMap lg={9} xs={12} />
        <Summary lg={3} xs={12} />
      </Grid>
    </center>
  );
};

export default App;
