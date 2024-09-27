export interface IProduit{
    id: string;
    name: string;
    unitPrice: number;
    unit: string;

    getprice(quantite: number) : number ;
}