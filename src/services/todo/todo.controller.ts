import * as express from 'express';

export const todoController = (app: express.Application) => {
    app.get('/api/v1/todos', (req: express.Request, res: express.Response) => {
        res.status(200);
    });
};
