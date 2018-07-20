// I dont love this name
const to = promise =>
  promise.then(data => [null, data]).catch(err => [err, undefined]);

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

async function run1() {
  const [step1Err, step1Result] = await to(step1());

  if (step1Err) {
    // Look ma! I can handle errors like the good ol' days :)
    console.error("There was an error homie: ", step1Err);
    return;
  }

  // Maybe we dont care about this error, let it bubble up
  const step2Result = await step2(step1Result);

  // Only care for errors?
  const [err] = await to(step3(step2Result));
  if (err) {
    return console.log("Error", error);
  }

  console.error("Done");
}

const throwAnErrorAsync = () =>
  Promise.reject("There was an error! AHHHHHH! Hide!");

async function run2() {
  // Want reusable variables? Just define them upfront
  let data, error;
  [error, data] = await to(step1());

  [error] = await to(throwAnErrorAsync());
  if (error) {
    console.error("An error happened but we will forge on!");
  }

  [error, data] = await to(step2(data));

  console.log(
    "We reused the error and data variables! \n(Might be a code smell but who cares?!)"
  );
}

run1();
run2();
