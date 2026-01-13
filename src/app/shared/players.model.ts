export interface PlayersModel {
    [playbook: string]: {
        Name: string;
        Description: string;
        Conditions: string[];
        Abilities: {
            Vitality: number;
            Composure: number;
            Reason: number;
            Presence: number;
            Sensitivity: number;
        };
        "Dawn Questions": {
            [questionType: string]: string;
        };
        "The Mask Of The Future": {
            "Rules": string;
            [mask: string]: string;
        };
        "The Mask Of The Past": {
            "Rules": string;
            [mask: string]: string;
        };
    }
}