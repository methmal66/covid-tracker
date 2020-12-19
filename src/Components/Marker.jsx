import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const Marker = ({ radius, lat, lng }) => {
  const useStyles = makeStyles((theme) => ({
    marker: {
      width: radius,
      height: radius,
      borderRadius: "50%",
      backgroundColor: "rgba(255,0,0,0.3)",
    },
  }));
  const classes = useStyles();

  return <div className={classes.marker} />;
};

export default Marker;
