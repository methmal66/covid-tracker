import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { sortFunction } from "../util";
import { makeStyles } from "@material-ui/core/styles";
import GoogleMapReact from "google-map-react";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  marker: {
    // width: "10px",
    // height: "10px",
    borderRadius: "50%",
    backgroundColor: "rgba(255,0,0,0.3)",
  },
}));

const MarkerList = ({ center }) => {
  const classes = useStyles();
  const markersData = useSelector((state) => {
    const { option, countries } = state;
    const foundData = countries.map((eachCountry) => [
      eachCountry.lat,
      eachCountry[option],
      eachCountry.lng,
    ]);
    //above order of array is required by the sorting function. don't change it
    foundData.sort(sortFunction).reverse();
    return foundData;
  });

  const markerElements = markersData.map((data) => {
    const highest = markersData[0][1];
    const maxDiameter = 500;
    let diameter = (data[1] / highest) * maxDiameter;
    console.log(diameter);
    return (
      <div
        lat={data[0]}
        lng={data[2]}
        className={clsx(classes.marker, {
          width: `${diameter}px`,
          height: `${diameter}px`,
        })}
      />
    );
  });

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyB14xbMSEg46WaKyjJo1cufzAxRS36hFhQ" }}
      defaultCenter={center}
      defaultZoom={3}
    >
      {markerElements}
    </GoogleMapReact>
  );
  //return <Fragment>{markerElements}</Fragment>;
};

export default MarkerList;
