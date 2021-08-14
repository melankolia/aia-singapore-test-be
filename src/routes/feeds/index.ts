import express, { Request, Response, Router } from "express";
import FeedsController from "../../controllers/feeds";

const Routers: Router = express.Router();
const Controller = new FeedsController();

Routers.get("/", Controller.findAll.bind(Controller));

export default Routers;