import { v4 as uuidv4 } from 'uuid';

import { type IProduit } from "../interface/IProduct";

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

export class OliveOil implements IProduit {
    id: string;
    name: string;
    unitPrice : number;
    unit: string;
    
    constructor (unitePrice: number){
        this.id = uuidv4();
        this.name = "Huile d'olive";
        this.unitPrice = unitePrice;
        this.unit = "litre"
    }

    getprice(quantite: number): number {
       return quantite * this.unitPrice;
    }
}

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

