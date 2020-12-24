import numeral from "numeral";

export const formatNumber = (num = 0) => {
  const formattedNumber = numeral(num).format("0,0");
  return formattedNumber;
};

export const formatNewNumber = (num) => {
  const formatedNumber = formatNumber(num);
  const formatedNewNumber = "+".concat(formatedNumber);
  return formatedNewNumber;
};

export const formatPercentage = (num) => {
  const formatedNumber = formatNumber(num);
  const formatedPercentage = formatedNumber.concat("%");
  return formatedPercentage;
};

export const sortBy = (option) => {
  const func = (a, b) => a[option] - b[option];
  return func;
};

export const getColor = (option) => {
  const OPTIONS = {
    cases: "rgba(255,0,0,0.3)",
    deaths: "rgba(0,0,255,0.3)",
    recovered: "rgba(0,255,0,0.3)",
  };
  return OPTIONS[option];
};

export const sortFunction = (a, b) => {
  return a[1] - b[1];
};

export const formatPoints = (obj) => {
  let points = [];
  const array = Object.entries(obj);

  for (let i = 2; i < array.length; i++) {
    let prevDiff = array[i - 1][1] - array[i - 2][1];
    let currDiff = array[i][1] - array[i - 1][1];
    let todayGrowthRate = (prevDiff / currDiff) * 100;
    let date = array[i][0];

    let newPoint = {
      x: date,
      y: todayGrowthRate,
    };
    points.push(newPoint);
  }
  return points;
};

export const findRelativeDiameter = (high, present) => {
  const MAX = 500;
  const diameter = (present / high) * MAX;
  return diameter;
};
