import { Request, Response } from "express";
import { TaskController } from "../controllers/taskControllers";

export class TaskRoutes {
  public taskController: TaskController = new TaskController();

  public routes(app): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({
        message: "GET request successfully",
      });
    });

    app
      .route("/task")
      .post(this.taskController.addNewTask)
      .get(this.taskController.getAllTask);

    app
      .route("/task/:taskID")
      .get(this.taskController.getTaskByID)
      .put(this.taskController.updateTask)
      .delete(this.taskController.deleteTask);
  }
}
