export const formatNumber = (num = 0) => {
  const stringNumber = num.toString();
  const formattedNumber = stringNumber.replace(
    /(\d)(?=(\d{3})+(?!\d))/g,
    "$1,"
  );
  return formattedNumber;
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
