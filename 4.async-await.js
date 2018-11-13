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
  
async function run() {
  try {
    const result = await step1();
    const result2 = await step2(result);
    const result3 = await step3(result2);
    console.log(result3);
    console.log("done");
  } catch(e) {
    console.error(e);
  }
}

run();
