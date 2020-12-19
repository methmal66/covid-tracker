import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChoosenCountry } from "../Actions/choosenCountry";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const Header = ({ lg }) => {
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
    <FormControl>
      <Select
        variant="outlined"
        value={choosenCountry}
        onChange={(event) => dispatch(setChoosenCountry(event.target.value))}
      >
        {MenuItemElements()}
      </Select>
    </FormControl>
  );
};
export default Header;
