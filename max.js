const business = 850;
const minister = 750;
const army = 600;

// if (business > minister) {
//   console.log("business is bigger");
// } else {
//   console.log("minister is bigger");
// }

/* if (business > minister && business > army) {
  console.log("business");
} else if (minister > business && minister > army) {
  console.log("minister");
} else {
  console.log("army");
} */

var max = Math.max(business, minister, army);
console.log(max);
