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

  for (let i = 1; i < array.length - 1; i++) {
    let prevDiff = array[i][1] - array[i - 1][1];
    let nextDiff = array[i + 1][1] - array[i][1];
    let todayGrowthRate = (prevDiff / nextDiff) * 100;
    let date = array[i][0];

    let newPoint = {
      x: date,
      y: todayGrowthRate,
    };
    points.push(newPoint);
    console.log(newPoint);
  }

  return points;
};
