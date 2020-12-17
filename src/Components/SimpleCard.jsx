import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { formatNumber } from "../util";

const SimpleCard = ({ title, _new, total }) => {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography>{title}</Typography>
          <Typography variant="h5">+{formatNumber(_new)} today</Typography>
          <Typography>{formatNumber(total)} total</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default SimpleCard;
