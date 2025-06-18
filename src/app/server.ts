import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";
let server: Server;
const port = 5000;
async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://mongoose:mongoose@cluster0.jq7qb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("connection to the mongoDB using Mongoose");
    server = app.listen(port, async () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
