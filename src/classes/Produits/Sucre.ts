import type { IProduit } from "../../interface/IProduct";
import { v4 as uuidv4 } from 'uuid';

export class Sucre implements IProduit {
    id: string;
    name: string;
    unitPrice : number;
    unit: string;
    
    constructor (unitePrice: number){
        this.id = uuidv4();
        this.name = "Huile d'olive";
        this.unitPrice = unitePrice;
        this.unit = "Kg"
    }

    getprice(quantite: number): number {
       return quantite * this.unitPrice;
    }
}

