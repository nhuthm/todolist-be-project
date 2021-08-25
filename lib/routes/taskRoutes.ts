export class TaskRoutes {
    public routes(app): void {
        app.route('/task')
        app.route('/task/:taskId')
    }
}