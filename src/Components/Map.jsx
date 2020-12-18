import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { MapContainer } from "react-leaflet";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "500px",
  },
}));

const Map = () => {
  const classes = useStyles();
  const center = useSelector((state) => {
    const { choosenCountry } = state;
    const countryName =
      choosenCountry === "World Wide" ? "USA" : choosenCountry;
    console.log(state.countries);
    const country = state.countries.filter((eachCountry) => {
      console.log(eachCountry);
      return eachCountry.name === countryName;
    })[0];
    console.log(countryName);
    return [country.lan, country.lon];
  });

  return (
    <Grid item xs>
      <Card className={classes.root}>
        <CardContent>
          <MapContainer center={center} zoom={3} />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Map;
