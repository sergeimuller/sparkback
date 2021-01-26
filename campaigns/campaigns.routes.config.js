"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.CampaignsRoutes = void 0;
var common_routes_config_1 = require("../common/common.routes.config");
var CampaignsRoutes = /** @class */ (function (_super) {
    __extends(CampaignsRoutes, _super);
    function CampaignsRoutes(app) {
        return _super.call(this, app, 'CampaignsRoutes') || this;
    }
    CampaignsRoutes.prototype.configureRoutes = function () {
        this.app.route("/campaigns")
            .get(function (req, res) {
            res.status(200).send("List of campaigns");
        })
            .post(function (req, res) {
            var payload = req.body;
            res.status(200).send({ message: "Post to campaigns", payload: payload });
        });
        this.app.route("/campaigns/:campaignId")
            .all(function (req, res, next) {
            // this middleware function runs before any request to /users/:campaignId
            // but it doesn't accomplish anything just yet---
            // it simply passes control to the next applicable function below using next()
            next();
        })
            .get(function (req, res) {
            res.status(200).send("GET requested for id " + req.params.campaignId);
        })
            .put(function (req, res) {
            res.status(200).send("PUT requested for id " + req.params.campaignId);
        })
            .patch(function (req, res) {
            res.status(200).send("PATCH requested for id " + req.params.campaignId);
        })["delete"](function (req, res) {
            res.status(200).send("DELETE requested for id " + req.params.campaignId);
        });
        return this.app;
    };
    return CampaignsRoutes;
}(common_routes_config_1.CommonRoutesConfig));
exports.CampaignsRoutes = CampaignsRoutes;
