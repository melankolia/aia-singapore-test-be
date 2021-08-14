import express, { Router, Request, Response, NextFunction } from "express";

// Routes 
import Feeds from "./feeds";

const Routers: Router = express.Router();

Routers.use("/feeds", Feeds);
Routers.use("/", (req: Request, res: Response, next: NextFunction): any =>
    res.send("Node JS Running")
);

export default Routers;
