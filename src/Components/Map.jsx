import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import "leaflet/dist/leaflet.css";
import Grid from "@material-ui/core/Grid";
import Marker from "./Marker";
import GoogleMapReact from "google-map-react";
import { sortBy, findRelativeDiameter, getColor } from "../util";

let option;
let styles = {
  root: {
    height: "640px",
  },
};
const Map = ({ lg, xs }) => {
  const center = useSelector((state) => {
    let countryName = state.choosenCountry;

    if (state.choosenCountry === "World Wide") {
      countryName = "Sri Lanka";
    }

    const country = state.countries.filter(
      (eachCountry) => eachCountry.name === countryName
    )[0];

    if (country) {
      const position = {
        lat: country.lat,
        lng: country.lng,
      };
      return position;
    }
    return {
      lat: 7,
      lng: 81,
    };
  });

  const markersData = useSelector((state) => {
    const { countries } = state;
    option = state.option;
    countries.sort(sortBy(option)).reverse();
    return countries;
  });

  markersData.forEach((data) => {
    const heighestCount = markersData[0][option];
    let thisCountryCount = data[option];
    let relativeDiameter = findRelativeDiameter(
      heighestCount,
      thisCountryCount
    );
    data.diameter = relativeDiameter;

    const bgColor = getColor(option);
    styles[data.diameter] = {
      transform: `scale(${data.diameter})`,
      backgroundColor: bgColor,
    };
  });

  const useStyles = makeStyles(() => styles);
  const classes = useStyles();
  const markerElements = markersData.map((data) => (
    <Marker style={classes[data.diameter]} lat={data.lat} lng={data.lng} />
  ));

  return (
    <Grid item lg={lg} xs={xs}>
      <div className={classes.root}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB14xbMSEg46WaKyjJo1cufzAxRS36hFhQ" }}
          defaultCenter={center}
          defaultZoom={3}
        >
          {markerElements}
        </GoogleMapReact>
      </div>
    </Grid>
  );
};

export default Map;
