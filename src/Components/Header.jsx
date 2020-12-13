import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  select: {
    marginLeft: "750px",
  },
  space: {
    width: "0px",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>COVID-19 TRACKER</h1>
      <FormControl className={classes.select}>
        <Select variant="outlined" value="1">
          <MenuItem value="1">World Wide</MenuItem>
          <MenuItem value="">country 1</MenuItem>
          <MenuItem value="">country 2</MenuItem>
          <MenuItem value="">country 3</MenuItem>
        </Select>
      </FormControl>
      <div className={classes.space}></div>
    </div>
  );
};
export default Header;
