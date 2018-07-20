function step1(callback) {
  console.log("step 1");
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

  console.log("step1:", value);

  step2(value, (err, value) => {
    if (err) {
      // Ah!!!!
    }

    console.log("step2:", value);

    step3(value, (err, value) => {
      if (err) {
        // Ah!!!!
      }

      // We are done!
      console.log("step3:", value);
    });
  });
});
