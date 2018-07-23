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

const probe = v => {
  console.log(v);
  return v;
};

step1()
  .then(step2)
  .then(step3)
  .then(probe)
  .then(param => {
    console.log("done");
  })
  .catch(error => {
    console.log("an error happened");
  });

// DONT DO THIS!
// step1()
//   .then(result =>
//     step2(result).then(result =>
//       step3(result).then(result => {
//         console.log(result);
//         console.log("done");
//       })
//     )
//   )
//   .catch(error => {
//     console.log("an error happened");
//   });
