const { nextISSTimesForMyLocation } = require("./iss");

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
//     console.log("It worked! Returned Flyover Times:", coords);
//   }
// );

const printPassTimes = function (passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  printPassTimes(passTimes);
});
