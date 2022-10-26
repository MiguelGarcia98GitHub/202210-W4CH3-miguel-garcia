export interface ICharacter {
    name: string;
    family: string;
    age: number;
    status: boolean;
    customMessage: string;
    imageURL: string;
}

export interface IKing extends ICharacter {
    kingdomYears: number;
}

export interface IWarrior extends ICharacter {
    weapon: string;
    dexterity: number;
}

export interface IAdvisor extends ICharacter {
    advisedPerson: string;
}

export interface ISquire extends ICharacter {
    servingTo: string;
    pelotism: number;
}
