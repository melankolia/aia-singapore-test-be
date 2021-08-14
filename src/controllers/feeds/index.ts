import { Request, Response, NextFunction } from "express";
import FeedsService from "../../services/feeds";
import Responses from "../../utils/helper/Response";

class Feeds {
    feedsService: FeedsService;

    constructor() {
        this.feedsService = new FeedsService();
    }

    public async findAll(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const tags = req.query?.tags as string
            const Result = await this.feedsService.findAll(tags)

            Responses.success(res, Result)
        } catch (error) {
            Responses.failed(res, error, next)
        }
    }
}

export default Feeds;