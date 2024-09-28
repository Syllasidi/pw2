
import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
export class  Starship {
    public ref: string;
    public speed: number;
    public statut: StarshipStatus;
    public id: string;

    
constructor(ref:string, speed:number, id?: string){
this.ref = ref;
this.speed = speed;
this.statut = StarshipStatus.PARKED;
//étape 3
if (id && validator.isUUID(id, 4)) {
    this.id = id;
  } else if (id) {
    throw new Error("Oups! l'ID a un probleme il est pas valide ");
  } else {
    this.id = uuidv4(); // id type UUID est automatiquement attribué
  }

}

 

  takeoff(){
        if (this.statut == StarshipStatus.PARKED){
            this.statut = StarshipStatus.TAKING_OFF;
            console.log("Attention Le vaisseau est en cours de décollage! \n ")
            
        }else{throw new Error("Le vaisseau ne peut décoller que s'il est stationné !");}
        
    }

    fly(){
        if (this.statut == StarshipStatus.TAKING_OFF){
            this.statut = StarshipStatus.FLYING;
            console.log("Le vaisseau en vol \n ")
            
        }else{
        throw new Error("Le vaisseau ne peut voler que s'il est en cours de décollage !");}

    }

    land(){
        if (this.statut == StarshipStatus.FLYING){
            this.statut = StarshipStatus.LANDING;
           console.log("Le vaisseau est entrain d'atterir  \n ")
            
        }else{
        throw new Error("Le vaisseau ne peut atterir que s'il est en vol !");}

    }

    park(){
        if (this.statut == StarshipStatus.LANDING){
            this.statut = StarshipStatus.PARKED;
            console.log("Le vaisseau est bien stationé merci \n")
            
        }
        else{throw new Error("Le vaisseau ne peut stationer que s'il est en atterisage !"); }
        

    }

}
 

export enum StarshipStatus {
    PARKED = "stationné",
    TAKING_OFF = "en cours de décollage",
    FLYING = "en vol",
    LANDING = "en cours d'atterrissage"}

