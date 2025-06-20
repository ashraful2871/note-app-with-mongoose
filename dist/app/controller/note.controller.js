"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notesRouts = void 0;
const express_1 = __importDefault(require("express"));
const note_models_1 = require("../models/note.models");
exports.notesRouts = express_1.default.Router();
exports.notesRouts.post("/create-note", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const note = yield note_models_1.Note.create(body);
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
}));
exports.notesRouts.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const notes = yield note_models_1.Note.find();
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
}));
exports.notesRouts.get("/:noteId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { noteId } = req.params;
    const note = yield note_models_1.Note.findById({ _id: noteId });
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
}));
exports.notesRouts.patch("/:noteId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { noteId } = req.params;
    const updatedBody = req.body;
    const note = yield note_models_1.Note.findByIdAndUpdate(noteId, updatedBody, { new: true });
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
}));
exports.notesRouts.delete("/:noteId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { noteId } = req.params;
    const note = yield note_models_1.Note.findByIdAndDelete(noteId);
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
}));
