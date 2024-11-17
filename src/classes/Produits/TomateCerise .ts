import { type IProduit } from "../../interface/IProduct";
import { v4 as uuidv4 } from 'uuid';
 
 export class  TomateCerise implements IProduit {
    id: string;
    name: string;
    unitPrice : number;
    unit: string;
    
    constructor (unitPrice: number){
        this.id = uuidv4();
        this.name = "Tomate cerise";
        this.unitPrice = unitPrice;
        this.unit = "KG"
    }

    getprice(quantite: number): number {
       return quantite * this.unitPrice;
    }   
}