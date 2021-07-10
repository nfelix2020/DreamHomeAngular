
import { Bien } from './../Bien.interface';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from '../lier_nav_connexion/emitters';
import { Biens } from '../typeBien/Biens';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {


  public title="Trouver votre logement de rêve";
  public slogan="Nos offres sont les meilleures sur le marché";
  public trouverlogement=" Trouver un logement";

   public recherche: string;

   Biens:Biens[] =[];


  message= '';
  

  constructor(private http: HttpClient) { 
   
    
  }

  //'https://localhost:8000/api/users'
  ngOnInit(): void {
    //this.filteredHotels =this.Biens;
    this.http.get('https://127.0.0.1:8000/api/users', {withCredentials:false}).subscribe(
      (res: any) =>{
       this.message= 'Bonjour ${res.name}';
       Emitters.authEmitter.emit(true); //authentification
      },
      (      err: any)=>{
       this.message='Vous êtes pas connecter';
       Emitters.authEmitter.emit(false);
      }
    );
    

    this.Biens= [


      {
       AppartID: 1,
       Appartname: "Appartement Marrakech",
       imgURL: "assets/images/appart2.jpg",
       prix: 3700, 
       btntext:"Détails",
       description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available"
      },
   
      {
        AppartID: 2,
        Appartname: "Appartement Yaoundé",
        imgURL: "assets/images/riad1.jpg",
        prix: 4200,
        btntext:"Détails",
        description: "Tours est une ville dont l’ouverture nationale et internationale n’est plus à vanter aux investisseurs dans l’immobilier de luxe. Elle est à la croisée des grandes villes telles que Paris, Bordeaux, Le Mans, Rouen, Nantes, Angers. Grâce à l’aéroport international Tours-Val-de-Loire"
      },
   
      {
        AppartID:3,
        Appartname: "Appartement Kigali",
        imgURL: "assets/images/appart1.jpg",
        prix: 3900,
        btntext:"Détails",
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available"
      },
   
     
      {
       AppartID: 1,
       Appartname: "Villa Tours",
       imgURL: "assets/images/house1.jpg",
       prix: 250000,
       btntext:"Détails",
       description: "Tours est une ville dont l’ouverture nationale et internationale n’est plus à vanter aux investisseurs dans l’immobilier de luxe. Elle est à la croisée des grandes villes telles que Paris, Bordeaux, Le Mans, Rouen, Nantes, Angers. Grâce à l’aéroport international Tours-Val-de-Loire"
      },
   
      {
        AppartID: 2,
        Appartname: "Villa Cotonou",
        imgURL: "assets/images/house5.jpg",
        prix: 230000,
        btntext:"Détails",
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available"
      },
   
      {
        AppartID:3,
        Appartname: "Villa Kigali",
        imgURL: "assets/images/house3.jpg",
        prix: 123000,
        btntext:"Détails",
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available"
      }
   
        ];
   


  }

  Search(){

    if(this.recherche != ""){

    this.Biens=this.Biens.filter(res=>{
return res.Appartname.toLocaleLowerCase().match(this.recherche.toLocaleLowerCase());
    });
  }else if(this.recherche == "") {
    this.ngOnInit();

  }
  }

} 





















 
 


