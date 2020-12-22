export const formatNumber = (num = 0) => {
  console.log(num);
  const stringNumber = num.toString();
  const formattedNumber = stringNumber.replace(
    /(\d)(?=(\d{3})+(?!\d))/g,
    "$1,"
  );
  return formattedNumber;
};

export const sortBy = (option) => {
  const SORT_FUNCTIONS = {
    cases: (a, b) => a.cases - b.cases,
    recoverd: (a, b) => a.recovered - b.recovered,
    deaths: (a, b) => a.deaths - b.deaths,
  };
  return SORT_FUNCTIONS[option];
};

export const sortByName = (a, b) => {
  return a.name - b.name;
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
