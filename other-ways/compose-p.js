const { composeP, pipeP, tap } = require("ramda");

const probe = tap(v => console.log(`${v}\ndone`));

const step1 = () =>
  new Promise(resolve => {
    resolve("goats");
  });

const step2 = param =>
  new Promise(resolve => {
    console.log(param);
    resolve("are");
  });

const step3 = param =>
  new Promise(resolve => {
    console.log(param);
    resolve("awesome");
  });

const run = composeP(
  probe,
  step3,
  step2,
  step1
);



run().catch(err => {
  // Try/catch?! Gross!
  console.log("err", err);
});


// Other examples
// const runPipe = pipeP(
//   step1,
//   step2,
//   step3,
//   probe,
// );

// const runNested = () => probe(step3(step2(step1())));