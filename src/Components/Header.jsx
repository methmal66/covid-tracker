import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChoosenCountry } from "../Actions/choosenCountry";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";

const Header = () => {
  const dispatch = useDispatch();
  const { choosenCountry } = useSelector((state) => state);

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
    <Fragment>
      <Grid item xs={8}>
        <h2>COVID-19 TRACKER</h2>
      </Grid>
      <Grid item xs={4}>
        <FormControl>
          <Select
            variant="outlined"
            value={choosenCountry}
            onChange={(event) =>
              dispatch(setChoosenCountry(event.target.value))
            }
          >
            {MenuItemElements()}
          </Select>
        </FormControl>
      </Grid>
    </Fragment>
  );
};
export default Header;
