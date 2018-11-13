async function thisReturnsAPromise() {
    return await "goat"; // We can await not promise values too
    // return Promise.resolve("goat"); <-- Equivalent to this
}

thisReturnsAPromise().then(console.log);