import { FeedsService } from "./index.d";
import { FeedsPayload } from "../../controllers/feeds/index.d";
import FeedsModel from "../../models/feeds";

class Feeds implements FeedsService {
    feedsModel: FeedsModel;

    constructor() {
        this.feedsModel = new FeedsModel();
    }

    public async findAll(payload: FeedsPayload): Promise<any> {
        try {
            const feeds = await this.feedsModel.findAll(payload);
            if (!feeds) throw "Data Not Found";

            // Pagination
            feeds.items = feeds.items.slice(
                (Number(payload.page) - 1) * Number(payload.limit),
                Number(payload.page) * Number(payload.limit))
            return feeds;
        } catch (error) {
            throw error
        }
    }
};

export default Feeds;