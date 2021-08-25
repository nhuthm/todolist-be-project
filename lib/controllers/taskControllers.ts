import * as mongoose from "mongoose";
import { taskSchema } from "../models/taskModel";
import { Request, Response } from "express";

const Task = mongoose.model("Task", taskSchema);
export class TaskController {
  // Create new task
  public addNewTask(req: Request, res: Response) {
    if (!req.body.taskName) {
      res.status(400).send({ message: "Task name cannot be empty" });
      return;
    }
    let newTask = new Task(req.body);
    newTask.save((err, task) => {
      if (err) {
        res.send(err);
      }
      res.json(task);
    });
  }
}
