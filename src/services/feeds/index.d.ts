import { FeedsPayload } from "../../controllers/feeds/index.d";
export interface FeedsService {
    findAll(tags: FeedsPayload): Promise<any>;
}