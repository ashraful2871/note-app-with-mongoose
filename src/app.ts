import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";
import { notesRouts } from "./app/controller/note.controller";
const app: Application = express();
app.use(express.json());

app.use("/notes", notesRouts);

app.get("/", (req: Request, res: Response) => {
  res.send("welcome to note app");
});
export default app;
