const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip);
// });

// fetchCoordsByIP("70.66.155.47", (error, coords) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log("It worked! Returned Location data:", coords);
// });

// fetchISSFlyOverTimes(
//   { latitude: 48.4777, longitude: -123.3658 },
//   (error, coords) => {
//     if (error) {
//       console.log(error);
//       return;
//     }
//     console.log("It worked! Returned Location data:", coords);
//   }
// );
