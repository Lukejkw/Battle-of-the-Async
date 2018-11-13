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

// probe(step3(step2(step1())));
const run = composeP(
  probe,
  step3,
  step2,
  step1
);

run().catch(err => {
  console.log("err", err);
});