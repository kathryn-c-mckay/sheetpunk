import { AbilitiesModel } from "../../shared/abilities/abilities.model";
export interface GmScreenItemModel {
    name: string;
    masksUsed: number;
    masksTotal: number;
    dawnQuestions: {description: string, bMarked: boolean}[];
    conditions: string[];
    abilities: AbilitiesModel;
}