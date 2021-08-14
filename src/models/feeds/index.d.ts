export interface FeedsModel {
    findAll(tags: string): Promise<any>;
}