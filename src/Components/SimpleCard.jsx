import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { formatNumber, getColor } from "../util";
import { setOption } from "../Actions/option";

const useStyles = makeStyles(() => ({
  root: {
    padding: 15,
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0,0.05)",
    },
  },
}));

const SimpleCard = ({ title, _new, total, thisOption }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setOption(thisOption));
  };

  return (
    <Paper className={classes.root} onClick={handleClick}>
      <Typography>{title}</Typography>
      <Typography variant="h5">{formatNumber(_new)} today</Typography>
      <Typography>{formatNumber(total)} total</Typography>
    </Paper>
  );
};

export default SimpleCard;
