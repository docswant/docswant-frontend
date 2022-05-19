export default function getCalculate(myYear) {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();

  return currentYear - myYear + 1;
}
