import * as express from 'express';

import { ArticlesRoutes } from './articles/articles.routes.config';
import { CampaignsRoutes } from './campaigns/campaigns.routes.config';
import { CommonRoutesConfig } from './common/common.routes.config';

export function getRoutes(app: express.Application) {
    const routes: Array<CommonRoutesConfig> = [
        new ArticlesRoutes(app),
        new CampaignsRoutes(app)
    ];
    return routes
}