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

  // Get task by ID
  public getTaskByID(req: Request, res: Response) {
    Task.findById(req.params.taskId, (err, task) => {
      if (err) {
        res.send(err);
      }
      res.json(task);
    });
  }

  // Get task by task name
  public getTaskByName(req: Request, res: Response) {
    Task.findOne({ taskName: req.params.taskName }, (err, task) => {
      if (err) {
        res.send(err);
      }
      res.json(task);
    });
  }

  // Get all task
  public getAllTask(req: Request, res: Response) {
    Task.find({}, (err, task) => {
      if (err) {
        res.send(err);
      }
      res.json(task);
    });
  }

  // Update task
  public updateTask(req: Request, res: Response) {
    Task.findOneAndUpdate(
      { _id: req.params.taskID },
      req.body,
      { new: true },
      (err, task) => {
        if (err) {
          res.send(err);
        }
        res.json(task);
      }
    );
  }

  // Delete task
  public deleteTask(req: Request, res: Response) {
    Task.findByIdAndRemove({ _id: req.params.taskID })
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: "Cannot the delete the task",
          });
        } else {
          res.status(200).send({ message: "Delete task successfully" });
        }
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  }
}
