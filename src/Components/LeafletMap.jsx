import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { MapContainer } from "react-leaflet";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "640px",
  },
}));

const LeafletMap = ({ lg, xs }) => {
  const classes = useStyles();

  return (
    <Grid item lg={lg} xs={xs}>
      <Paper className={classes.root}>
        <MapContainer center={[0, 0]} zoom={3} />
      </Paper>
    </Grid>
  );
};

export default LeafletMap;
