import { CommonRoutesConfig } from '../common/common.routes.config';
import * as express from 'express';

export interface ArticleItem {
    title: string,
    content: string,
    lastModified: Date,
}


export class ArticlesRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'ArticlesRoutes');
    }

    configureRoutes() {
        this.app.route(`/articles`)
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`List of articles`);
            })
            .post((req: express.Request, res: express.Response) => {
                const payload: ArticleItem = req.body

                res.status(200).send({ message: `Post to articles`, payload });
            });

        this.app.route(`/articles/:articleId`)
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                // this middleware function runs before any request to /users/:articleId
                // but it doesn't accomplish anything just yet---
                // it simply passes control to the next applicable function below using next()
                next();
            })
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`GET requested for id ${req.params.articleId}`);
            })
            .put((req: express.Request, res: express.Response) => {
                res.status(200).send(`PUT requested for id ${req.params.articleId}`);
            })
            .patch((req: express.Request, res: express.Response) => {
                res.status(200).send(`PATCH requested for id ${req.params.articleId}`);
            })
            .delete((req: express.Request, res: express.Response) => {
                res.status(200).send(`DELETE requested for id ${req.params.articleId}`);
            });
        return this.app;
    }

}