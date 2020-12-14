import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const SimpleCard = ({ title, _new, total }) => {
  return (
    <div>
      <Card>
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
