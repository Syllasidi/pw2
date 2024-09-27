import type { IProduit } from "../interface/IProduct";
export class cart{
orderLines : {produit : IProduit, qte: number}[]= [];

//methode add
add(produit: IProduit, qte: number) {
    this.orderLines.push({produit, qte });
  }

  calculateAmountByProduct (produit: IProduit): number {
    const orderLine = this.orderLines.find(line => line.produit.id === produit.id);
    return orderLine ? orderLine.produit.getprice(orderLine.qte) : 0;
  }
  calculateAmount(): number {
    return this.orderLines.reduce((total, line) => total + line.produit.getprice(line.qte), 0);
  }

  displayDetails(): string[] {
    return this.orderLines.map(line => {
      const { produit, qte } = line;
      const amount = produit.getprice(qte);
      return `ID: ${produit.id}, Nom: ${produit.name}, Prix unitaire: ${produit.unitPrice}, Unité: ${produit.unit}, Quantité: ${qte}, Montant: ${amount}`;
    });
  }

}
export default cart;