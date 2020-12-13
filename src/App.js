import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCountries } from "./Actions/countries";
import { setGlobal } from "./Actions/global";
import Header from "./Components/Header";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
}));

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      let res = await fetch("http://www.disease.sh/v3/covid-19/countries");
      let data = await res.json();
      data.forEach((each) => dispatch(setCountries(each)));

      res = await fetch("http://www.disease.sh/v3/covid-19/all");
      data = await res.json();
      dispatch(setGlobal(data));
    };

    fetchData();
    setLoading(false);
  }, []);

  return (
    <div className={classes.root}>
      <Header />
    </div>
  );
};

export default App;
