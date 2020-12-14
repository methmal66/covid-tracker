import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "500px",
  },
}));

const Map = () => {
  const classes = useStyles();

  return (
    <Grid item xs>
      <Card className={classes.root}></Card>
    </Grid>
  );
};

export default Map;
