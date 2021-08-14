import { Request, Response, NextFunction } from "express";
import { FeedsPayload } from "./index.d";
import FeedsService from "../../services/feeds";
import Responses from "../../utils/helper/Response";

class Feeds {
    feedsService: FeedsService;

    constructor() {
        this.feedsService = new FeedsService();
    }

    public async findAll(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const page = Number(req.query?.page || 1) as number
            const limit = Number(req.query?.limit || 10) as number;
            const tags = req.query?.tags as string;

            const payload = {
                page,
                limit,
                tags
            } as FeedsPayload;

            console.log(payload);

            const Result = await this.feedsService.findAll(payload)

            Responses.success(res, Result)
        } catch (error) {
            Responses.failed(res, error, next)
        }
    }
}

export default Feeds;