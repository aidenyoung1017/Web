"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//dotenv.config({ path: "../.env"});
//console.log(process.env);
var app_1 = __importDefault(require("./app"));
var typeorm_1 = require("typeorm");
var ormConfig_1 = __importDefault(require("./ormConfig"));
var PORT = process.env.PORT || 4000;
var PLAYGROUND_ENDPOINT = "/playground";
var GRAPQL_ENDPOINT = "/graphql";
var appOption = {
    port: PORT,
    playground: PLAYGROUND_ENDPOINT,
    endpoint: GRAPQL_ENDPOINT
};
var callbackHandleAppState = function () { return console.log("Listening on port " + PORT); };
typeorm_1.createConnection(ormConfig_1.default).then(function () {
    app_1.default.start(appOption, callbackHandleAppState);
})
    .catch(function (error) { return console.log(error); });
//# sourceMappingURL=index.js.map