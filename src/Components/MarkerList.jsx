import React from "react";
import { useSelector } from "react-redux";
import { sortFunction, findRelativeDiameter } from "../util";
import { makeStyles } from "@material-ui/core/styles";
import GoogleMapReact from "google-map-react";
import clsx from "clsx";

//material-ui's makeStyles hook moved to create dynamic classes
let option
let styles = {
  marker: {
    width: 1,
    height: 1,
    borderRadius: "50%",
  },
};

const MarkerList = ({ center }) => {

  const markersData = useSelector((state) => {
    const{countries } = state;
    option = state.option
    const foundData = countries.map((eachCountry) => [
      eachCountry.lat,
      eachCountry[option],
      eachCountry.lng,
    ]);
    //above order of array is required by the sorting function. don't change it
    foundData.sort(sortFunction).reverse();
    return foundData;
  });


  //create dynamic classes based on count
  markersData.forEach((data) => {

    const HeighestCount = markersData[0][1];
    let thisCountryCount = data[1]
    let relativeDiameter = findRelativeDiameter(HeighestCount, thisCountryCount)
    data.push(relativeDiameter);
    
    const bgColor = ()=>{
      const OPTIONS = {
        cases: "rgba(255,0,0,0.3)",
        recoverd: "rgba(0,255,0,0.3)",
        deaths: "rgba(0,0,255,0.3)",
      }
      return OPTIONS[option]
    }
    styles[relativeDiameter] = {
      transform: `scale(${relativeDiameter})`,
      backgroundColor: bgColor,
    };
  });


  const useStyles = makeStyles(() => styles);
  const classes = useStyles();
  const markerElements = markersData.map((data) => (
    <div
      className={clsx(classes.marker, classes[data[3]])}
      lat={data[0]}
      lng={data[2]}
    />
  ));


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
