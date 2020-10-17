import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

/**
 * Determines the current environment and sets the appropriate variables
 * @param {Express App} app 
 */
export function setEnvironment(app) {
    console.log(process.env.NODE_ENV);
    if (!process.env.NODE_ENV || process.env.NODE_ENV.toString().trim() !== 'production') {
        setDevEnv(app);
    } else {
        setProdEnv(app);
    }
}

/**
 * Used to set development environment variables
 * @param {Express App} app 
 */
function setDevEnv(app) {
    console.log("setting dev env");
    process.env.NODE_ENV = 'development';
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cors()); // Enable Cross Origin Requests, since Vue.JS is on a different origin
    process.env.DATABASE_URL = 'postgres://wldvjjox:VE_EWjdzEyM8ctAplVJTXxq9yAU_R0xJ@raja.db.elephantsql.com:5432/wldvjjox';
    process.env.TEST_DATABASE_URL = 'postgresql://jaypalan:@localhost:5432/jaypalan';
    process.env.TOKEN_SECRET = '27946982a9a4408996607fe95a6299f9';
    process.env.PORT=5000;
    process.env.TWILIO_SID='AC05f7ad1323f1bf4f814963d4fc90a4e3';
    process.env.TWILIO_AUTH='bb9c476029831e12a7924753c532ae4d';
    process.env.TWILIO_PHONE_NUMBER='+12319946588';
}

/**
 * Used to set production environment variables
 * @param {Express App} app 
 */
function setProdEnv(app) {
    console.log("setting prod env");
    process.env.NODE_ENV = 'production';
    process.env.DATABASE_URL = 'postgres://wldvjjox:VE_EWjdzEyM8ctAplVJTXxq9yAU_R0xJ@raja.db.elephantsql.com:5432/wldvjjox';
    process.env.TOKEN_SECRET = '9f4d50bfa6b2450a9ec766fc5104948e';
    process.env.TWILIO_SID='AC05f7ad1323f1bf4f814963d4fc90a4e3';
    process.env.TWILIO_AUTH='bb9c476029831e12a7924753c532ae4d';
    process.env.TWILIO_PHONE_NUMBER='+12319946588';
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    app.use(express.static(__dirname + '/../../dist'));
}