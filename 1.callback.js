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

step1((err, value) => {
  if (err) {
    // Ah!!!!
  }

  step2(value, (err, value) => {
    if (err) {
      // Ah!!!!
    }

    step3(value, (err, value) => {
      if (err) {
        // Ah!!!!
      }

      console.log(value);

      // We are done!
      console.log("done");
    });
  });
});
