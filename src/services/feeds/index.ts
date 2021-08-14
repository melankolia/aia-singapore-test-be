import { FeedsService } from "./index.d";
import FeedsModel from "../../models/feeds";

class Feeds implements FeedsService {
    feedsModel: FeedsModel;

    constructor() {
        this.feedsModel = new FeedsModel();
    }

    public async findAll(tags: string): Promise<any> {
        try {
            const feeds = await this.feedsModel.findAll(tags);
            if (!feeds) throw "Data Not Found";

            return feeds;
        } catch (error) {
            throw error
        }
    }
};

export default Feeds;