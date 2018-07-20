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



step1()
  .then(step2)
  .then(step3)
  .then(param => {
      console.log('done');
  })
  .catch(error => {
    console.log("an error happened");
  });


// DONT DO THIS
// step1()
//   .then(result =>
//     step2().then(result =>
//       step3().then(result => {
//         console.log("done");
//       })
//     )
//   )
//   .catch(error => {
//     console.log("an error happened");
//   });