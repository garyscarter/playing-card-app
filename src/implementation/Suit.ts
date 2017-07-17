import { ISuit } from '../interface/ISuit';

export class Suit implements ISuit {

    name: string;

    constructor(name: string) {

        this.name = name;
        
    }

}