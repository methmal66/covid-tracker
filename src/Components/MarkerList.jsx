import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { sortFunction } from "../util";
import { makeStyles } from "@material-ui/core/styles";
import GoogleMapReact from "google-map-react";

const useStyles = makeStyles((theme) => ({
  marker: {
    width: 50,
    height: 50,
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
    const maxRadius = 500;
    let radius = (data[1] / highest) * maxRadius;
    return <div className={classes.marker} lat={data[0]} lng={data[2]}></div>;
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
