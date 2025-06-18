import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";
const app: Application = express();

//hello  world
const noteSchema = new Schema({
  title: { type: String, require: true, trim: true },
  content: { type: String, default: "" },
  category: {
    type: String,
    enum: ["personal", "work", "study"],
    default: "personal",
  },
  pinned: {
    type: Boolean,
    default: false,
  },
  tags: {
    label: { type: String, require: true },
    color: { type: String, default: "gray" },
  },
});

const Note = model("Note", noteSchema);

app.post("/create-note", async (req: Request, res: Response) => {
  const myNote = new Note({
    title: "Learning Mongoose",
    tags: {
      label: "database",
    },
  });
  await myNote.save();
  res.status(201).json({
    Success: true,
    message: "note created successfully",
    note: myNote,
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send("welcome to note app");
});
export default app;
