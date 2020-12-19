import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { formatNumber } from "../util";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "15px",
  },
}));

const SimpleCard = ({ title, _new, total }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography>{title}</Typography>
      <Typography variant="h5">+{formatNumber(_new)} today</Typography>
      <Typography>{formatNumber(total)} total</Typography>
    </Paper>
  );
};

export default SimpleCard;
