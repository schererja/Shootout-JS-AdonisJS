import bodyparser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import * as passport from "passport";
import * as passportJWT from "passport-jwt";
import path from "path";
import 'reflect-metadata';

dotenv.config();
const extractJWT = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const app = express();
const port = process.env.SERVER_PORT || 3000; // default port to listen

const jwtOptions = {
    jwtFromRequest : extractJWT.fromAuthHeaderWithScheme("jwt"),
    secretOrKey: process.env.JWT_SECRET || "UpdateENV"
};

// const strategy = new JwtStrategy(jwtOptions, (jwtPayload, next) =>{

// })
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.render("index");
} );

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
