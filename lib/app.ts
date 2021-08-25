import * as express from "express";
import * as bodyParser from "body-parser";
import { TaskRoutes } from "./routes/taskRoutes";
import * as mongoose from "mongoose";

class App {
  public app: express.Application;
  public routePrv: TaskRoutes = new TaskRoutes();
  public mongoUrl: string =
    "mongodb://nhuthuynh:nrj8kueb@127.0.0.1:27017/todolist-project";

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
    this.mongoSetup();
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private mongoSetup(): void {
    (mongoose as any).Promise = global.Promise;
    mongoose.connect(this.mongoUrl);
  }
}

export default new App().app;
