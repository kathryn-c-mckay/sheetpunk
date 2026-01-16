import { AbilitiesModel } from "../shared/abilities/abilities.model";
import { MoveModel } from "../shared/move.model";

export interface PlaybookModel {
    name: string;
    description: string;
    moves: MoveModel[];
    conditions: string[];
    abilities: AbilitiesModel;
    dawnQuestions: {id: string; description: string, bEditable: boolean, bMarked: boolean}[];
    masks: Map<string, {
            id: string;
            description: string;
            name: string;
            bMarked: boolean;
        }[]
    >;
}