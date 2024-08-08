import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "https://real-estate-mern-app-1.onrender.com",
  },
});

let onlineUser = [];

const addUser = (userId, socketId) => {
  const userExits = onlineUser.find((user) => user.userId === userId);
  if (!userExits) {
    onlineUser.push({ userId, socketId });
  }
};

const removeUser = (socketId) => {
  onlineUser = onlineUser.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return onlineUser.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  socket.on("newUser", (userId) => {
    addUser(userId, socket.id);
  });

  socket.on("sendMessage", ({ receiverId, data }) => {
    const receiver = getUser(receiverId);
    io.to(receiver.socketId).emit("getMessage", data);
  });

  socket.on("disconnect", () => {
    removeUser(socket.id);
  });
});

console.log("server is running ");

io.listen(4000, () => {
  console.log("Server is running!");
});
