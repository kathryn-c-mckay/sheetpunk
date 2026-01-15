export interface MoveModel {
    id: string;
    name: string;
    description: string;
    bMarked?: boolean; // if undefined, is not markable.
}