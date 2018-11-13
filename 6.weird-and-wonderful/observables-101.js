const {
  Observable: { create }
} = require("rxjs");

// Create an observable
const iAmGoat$ = create(subscriber => {
  subscriber.next("Hey,");
  // ... something async ...
  subscriber.next("these");
  subscriber.next("are");
  subscriber.next("messages");
  // ... something else async ...
  subscriber.next("from a GOAT observable.");
  subscriber.next("You dont see that everyday!");
});

const subscription = iAmGoat$.subscribe(val => console.log(val));

// When we want to stop listening, we unsubscribe.
// We can unsubscribe here because our messages emitted straight away.
// However, be careful not to write data-race code!
//
// NOTE: you shouldn't leave subscriptions running if you arent using them to
// avoid memory leaks
subscription.unsubscribe();
