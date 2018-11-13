// NOTE: This is the wrong tool for the job. 
// Promises only return a single value which in our usecase is perfect. 
// Observables are meant for a stream of values over time
// Anyway, this is how we could achieve our example using rxjs

const {
    from
  } = require("rxjs");
const { catchError, mergeMap, map, take } = require("rxjs/operators");

const step1 = async () => await "goats";

const step2 = async param => {
  console.log(param);
  return await "are";
};

const step3 = async param => {
  console.log(param);
  return await "awesome";
};

// 1. First we need to convert from a `promise` to an `observable`
const step1$ = from(step1());

// 2. Next we define our pipeline for when our observable emits a value
const processGoatMessages$ = step1$.pipe(
  mergeMap(step2),
  mergeMap(step3),
  catchError(error => {
    console.error("error", e);
  })
);

// 3. Lastly we subscribe to start processing emitted values
processGoatMessages$.subscribe(v => console.log(`${v}\ndone`));