import { FeedsService } from "./index.d";
import { FeedsPayload } from "../../controllers/feeds/index.d";
import { FeedsResponse } from "../../models/feeds/index.d";
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

            // Sorting 
            feeds.items = feeds.items.sort(
                (a: FeedsResponse, b: FeedsResponse) => this.sorting(a.title, b.title, payload.sort));
            // Pagination
            feeds.items = feeds.items.slice(
                (Number(payload.page) - 1) * Number(payload.limit),
                Number(payload.page) * Number(payload.limit))
            return feeds;
        } catch (error) {
            throw error
        }
    }

    private sorting(a: string, b: string, sort: string = 'asc'): number {
        if (a.toUpperCase() > b.toUpperCase()) {
            return sort == 'asc' ? 1 : -1;
        } else {
            return sort == 'asc' ? -1 : 1;
        }
    }
};

export default Feeds;