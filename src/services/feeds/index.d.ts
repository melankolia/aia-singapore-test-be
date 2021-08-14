export interface FeedsService {
    findAll(tags: string): Promise<any>;
}