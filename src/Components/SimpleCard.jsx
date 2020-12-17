import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const SimpleCard = ({ title, _new, total }) => {
  const formatNumber = (num = 0) => {
    const stringNumber = num.toString();
    const formattedNumber = stringNumber.replace(
      /(\d)(?=(\d{3})+(?!\d))/g,
      "$1,"
    );
    return formattedNumber;
  };

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
