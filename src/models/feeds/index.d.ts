export interface FeedsModel {
    findAll(tags: string): Promise<any>;
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