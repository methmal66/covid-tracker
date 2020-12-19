import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  circle: {
    background: "rgba(255,0,0,0.4)",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    borderColor: "rgba(255,0,0)",
    borderWidth: "5px",
  },
}));

const Marker = ({ highest }) => {
  const classes = useStyles();

  return <div className={classes.circle}></div>;
};

export default Marker;
