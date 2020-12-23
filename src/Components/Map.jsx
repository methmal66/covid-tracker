import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import "leaflet/dist/leaflet.css";
import Grid from "@material-ui/core/Grid";
import MarkerList from "./MarkerList";
import GoogleMapReact from "google-map-react";
//import { MapContainer as LeafletMap, TileLayer } from "react-leaflet";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "640px",
  },
}));

const Map = ({ lg, xs }) => {
  const classes = useStyles();

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
      console.log(position);
      return position;
    }
    return {
      lat: 7,
      lng: 81,
    };
  });

  return (
    <Grid item lg={lg} xs={xs}>
      <MarkerList center={center} />
    </Grid>
  );
};

export default Map;
