import { v4 as uuidv4 } from 'uuid';
import { type IProduit } from "../../interface/IProduct";

export class Citron implements IProduit{
    id: string;
    name: string;
    unitPrice : number;
    unit: string;
    
    constructor (unitePrice: number){
        this.id = uuidv4();
        this.name = "Citron";
        this.unitPrice = unitePrice;
        this.unit = "Unité"
    }

    getprice(quantite: number): number {
       return quantite * this.unitPrice;
    }
}

   


