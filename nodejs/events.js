// buildin modules events

const EventEmitter = require("events");

const userEvent = new EventEmitter();

function leaveRoom(username, roomId) {
  console.log(`${username} leave the room having id ${roomId}`);
}

function joinRoom() {
  console.log("New user join the room");
}

userEvent.on("join-room", joinRoom);
userEvent.on("leave-room", leaveRoom);

userEvent.emit("join-room");

userEvent.emit("leave-room", "Rohan", 34);

userEvent.removeListener("leave-room", leaveRoom);

userEvent.emit("leave-room", "Rohan", 34);
