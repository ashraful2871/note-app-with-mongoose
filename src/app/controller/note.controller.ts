import express, { Request, Response } from "express";
import { Note } from "../models/note.models";

export const notesRouts = express.Router();

notesRouts.post("/create-note", async (req: Request, res: Response) => {
  const body = req.body;

  const note = await Note.create(body);
  // const myNote = new Note({
  //   title: "Learning Mongoose",
  //   tags: {
  //     label: "database",
  //   },>
  // });
  // await myNote.save();
  res.status(201).json({
    Success: true,
    message: "note created successfully",
    note,
  });
});

notesRouts.get("/", async (req: Request, res: Response) => {
  const notes = await Note.find();
  // const myNote = new Note({
  //   title: "Learning Mongoose",
  //   tags: {
  //     label: "database",
  //   },>
  // });
  // await myNote.save();
  res.status(200).json({
    Success: true,
    message: "note created successfully",
    notes,
  });
});
notesRouts.get("/:noteId", async (req: Request, res: Response) => {
  const { noteId } = req.params;
  const note = await Note.findById({ _id: noteId });
  // const myNote = new Note({
  //   title: "Learning Mongoose",
  //   tags: {
  //     label: "database",
  //   },>
  // });
  // await myNote.save();
  res.status(200).json({
    Success: true,
    message: "note created successfully",
    note,
  });
});
notesRouts.patch("/:noteId", async (req: Request, res: Response) => {
  const { noteId } = req.params;
  const updatedBody = req.body;
  const note = await Note.findByIdAndUpdate(noteId, updatedBody, { new: true });
  // const myNote = new Note({
  //   title: "Learning Mongoose",
  //   tags: {
  //     label: "database",
  //   },>
  // });
  // await myNote.save();
  res.status(201).json({
    Success: true,
    message: "note updated successfully",
    note,
  });
});
notesRouts.delete("/:noteId", async (req: Request, res: Response) => {
  const { noteId } = req.params;

  const note = await Note.findByIdAndDelete(noteId);
  // const myNote = new Note({
  //   title: "Learning Mongoose",
  //   tags: {
  //     label: "database",
  //   },>
  // });
  // await myNote.save();
  res.status(201).json({
    Success: true,
    message: "note updated successfully",
    note,
  });
});
