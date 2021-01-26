import { CommonRoutesConfig } from '../common/common.routes.config';
import * as express from 'express';
import { ArticleItem } from '../articles/articles.routes.config';

export interface CampaignItem {
    name: string,
    description?: string,
    isActive: boolean,
    isDraft: boolean,
    liveStart: Date,
    liveEnd: Date,
    articles?: Array<ArticleItem>
}

export class CampaignsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'CampaignsRoutes');
    }

    configureRoutes() {
        this.app.route(`/campaigns`)
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`List of campaigns`);
            })
            .post((req: express.Request, res: express.Response) => {
                const payload: CampaignItem = req.body

                res.status(200).send({ message: `Post to campaigns`, payload });
            });

        this.app.route(`/campaigns/:campaignId`)
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                // this middleware function runs before any request to /users/:campaignId
                // but it doesn't accomplish anything just yet---
                // it simply passes control to the next applicable function below using next()
                next();
            })
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`GET requested for id ${req.params.campaignId}`);
            })
            .put((req: express.Request, res: express.Response) => {
                res.status(200).send(`PUT requested for id ${req.params.campaignId}`);
            })
            .patch((req: express.Request, res: express.Response) => {
                res.status(200).send(`PATCH requested for id ${req.params.campaignId}`);
            })
            .delete((req: express.Request, res: express.Response) => {
                res.status(200).send(`DELETE requested for id ${req.params.campaignId}`);
            });
        return this.app;
    }

}