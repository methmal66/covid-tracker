import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  root: {
    width: 1,
    height: 1,
    borderRadius: "50%",
  },
}));

const Marker = ({ lat, lng, style }) => {
  const classes = useStyles();

  return (
    <div lat={lat} lng={lng}>
      <div className={clsx(classes.root, style)} />
    </div>
  );
};

export default Marker;
