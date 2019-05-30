import dotenv from "dotenv";
dotenv.config();
//dotenv.config({ path: "../.env"});
//console.log(process.env);

import app from "./app";
import { Options } from "graphql-yoga";
import { createConnection } from "typeorm";
import connectionOptions from "./ormConfig";


const PORT : number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT : string = "/playground";
const GRAPQL_ENDPOINT : string = "/graphql";

const appOption : Options = {
    port: PORT,
    playground: PLAYGROUND_ENDPOINT,
    endpoint : GRAPQL_ENDPOINT   
};

const callbackHandleAppState = () => console.log(`Listening on port ${PORT}`)

createConnection(connectionOptions).then(() => {
    app.start(appOption, callbackHandleAppState);
})
.catch(error => console.log(error));

