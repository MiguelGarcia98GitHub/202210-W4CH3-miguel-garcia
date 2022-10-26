export interface ICharacter {
    name: string;
    family: string;
    age: number;
    status: boolean;
    imageURL: string;
}

export interface IKing extends ICharacter {
    kingdomYears: number;
    customMessage: "Vais a morir todos";
}

export interface IWarrior extends ICharacter {
    weapon: string;
    dexterity: number;
    customMessage: "Primero golpeo y luego pregunto";
}

export interface IAdvisor extends ICharacter {
    advisedPerson: string;
}

export interface ISquire extends ICharacter {
    servingTo: string;
    pelotism: number;
}
