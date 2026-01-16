import { AbilitiesModel } from "../../shared/abilities/abilities.model";
export interface GmScreenItemModel {
    id: string;
    name: string;
    masksUsed: number;
    masksTotal: number;
    dawnQuestions: {description: string, bMarked: boolean}[];
    conditions: string[];
    abilities: AbilitiesModel;
    personalQuarters: {name: string; checked: boolean}[];
}
// TODO: should I merge this with PlaybookModel?