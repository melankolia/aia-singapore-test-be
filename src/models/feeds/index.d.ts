import { FeedsPayload } from '../../controllers/feeds/index.d';
export interface FeedsModel {
    findAll(payload: FeedsPayload): Promise<any>;
}

export type FeedsResponse = {
    title: string,
    link: string,
    media: {
        m: string
    },
    date_taken: string,
    description: string | Array,
    published: string,
    author: string,
    author_id: string,
    tags: string | Array,
}