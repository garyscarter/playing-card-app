import { ISuit } from '../interface/ISuit';

export class Suit implements ISuit {

    name: string;

    icon: string;

    color: string;

    constructor(name: string, icon: string, color: string) {

        this.name = name;

        this.icon = icon;

        this.color = color;

    }

}
