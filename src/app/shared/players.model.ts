export interface PlayersModel {
    [playbook: string]: {
        name: string;
        description: string;
        conditions: string[];
        abilities: {
            description: string;
            value: number;
        }[];
        playbookMoves: {
            name: string;
            description: string;
            editable: boolean;
            checked: boolean;
        }[];
        dawnQuestions: {
            description: string;
            editable: boolean;
            checked: boolean;
        }[];
        masks: {
            type: string;
            name: string;
            description: string;
            editable: boolean;
            checked: boolean;
        }[];
        // TODO: should this pattern be a type? Or a series of types to unionize?? Wait, don't unionize!! That costs money!!!
        personalQuarters: {
            name: string;
            editable: boolean;
            checked: boolean;
        }[];
    }
}