export default function getCalculate(myYear) {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();

  return currentYear - myYear + 1;
}

// export default function getDay(myDate) {
//   let masTime = new Date(myDate);
//   let currentDate = new Date();

//   let diff = masTime.getTime() - currentDate.getTime();

//   return diff;
// }
