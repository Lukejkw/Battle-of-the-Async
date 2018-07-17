const async = require("async");
const util = require("util");

const to = promise =>
  promise.then(data => [null, data]).catch(err => [err, undefined]);

const step1Async = util.promisify(step1);
const step2Async = util.promisify(step2);
const step3Async = util.promisify(step3);

doTheThingsGoStyle();

async function doTheThingsGoStyle() {
  const [step1Err, result] = await to(step1Async());

  if (step1Err) {
    // Look ma! I can handle errors like the good ol' days
    console.error('There was an error homie: ', step1Err);
  }

  // Maybe we dont care about this error, let it bubble up
  const result2 = await step2Async(result);

  // Only care for errors? 
  const [error] = await to(step3Async(result2));
  if(!error) {
    console.log('We did it!')
  } else {
    console.error('We failed.')
  }
}

async function doTheThingAsync() {
  try {
    const result = await step1Async();
    const result2 = await step2Async(result);
    const result3 = await step3Async(result2);
    console.log(result3);
  } catch (err) {
    console.log("err", err);
  }
}

function doTheThingWaterfall() {
  async.waterfall([step1, step2, step3], (err, param) => {
    if (err) {
      console.log("error", err);
    }

    console.log("param", param);
  });
}

function doTheThing() {
  step1("...", function(err, value) {
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
}

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
