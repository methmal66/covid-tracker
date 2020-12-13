import React, { useState } from "react";
import { useSelector } from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
  },
  select: {
    marginLeft: "750px",
    width: "250px",
  },
  space: {
    width: "0px",
  },
}));

const Header = () => {
  const classes = useStyles();
  const [choosenCountry, setChoosenCountry] = useState("WorldWide");

  const MenuItemElements = () => {
    const countryNames = useSelector((state) => {
      const { countries } = state;
      const allNames = countries.map((eachCountry) => eachCountry.name);
      allNames.unshift("World Wide", "Sri Lanka");
      return allNames;
    });

    const elements = countryNames.map((name) => (
      <MenuItem key={name} value={name}>
        {name}
      </MenuItem>
    ));
    return elements;
  };

  return (
    <div className={classes.root}>
      <h1>COVID-19 TRACKER</h1>
      <FormControl className={classes.select}>
        <Select
          variant="outlined"
          value={choosenCountry}
          onChange={(event) => setChoosenCountry(event.target.value)}
        >
          {MenuItemElements()}
        </Select>
      </FormControl>
      <div className={classes.space}></div>
    </div>
  );
};
export default Header;
