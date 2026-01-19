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
        personalQuarters: {
            name: string;
            editable: boolean;
            checked: boolean;
        }[];
    }
}