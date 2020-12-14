import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {},
});

const SimpleCard = ({ title, _new, total }) => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography>{title}</Typography>
          <Typography variant="h5">+{_new} today</Typography>
          <Typography>{total} total</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default SimpleCard;
