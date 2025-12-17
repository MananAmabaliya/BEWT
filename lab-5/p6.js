const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("greet", () => {
    console.log("Hello! The 'greet' event was triggered.");
});

emitter.emit("greet");