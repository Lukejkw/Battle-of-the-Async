// Using Waterfall from async library
const async = require("async");

function step1(callback) {
  callback(null, "goats");
}

function step2(param, callback) {
  console.log(param);
  callback(null, "are");
}

function step3(param, callback) {
  console.log(param);
  callback(null, "awesome");
}

async.waterfall([step1, step2, step3], (err, param) => {
  if (err) {
    console.log("error", err);
  }
  console.log(param);
  console.log("done");
});
