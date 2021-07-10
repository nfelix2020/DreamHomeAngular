import { CreercompteComponent } from './creercompte/creercompte.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AcheterComponent } from './acheter/acheter.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ContactsComponent } from './contacts/contacts.component';

import { DetailProprieteComponent } from './detail-propriete/detail-propriete.component';
 
import { LouerComponent } from './louer/louer.component';
import { MaisonsavendreComponent } from './maisonsavendre/maisonsavendre.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { VendreComponent } from './vendre/vendre.component';


const routes: Routes = [
  {path: '', redirectTo:'/Acceuil' , pathMatch:'full'},
  {path:'Acceuil', component: AcceuilComponent},      
  {path:'Acheter', component: AcheterComponent},
  {path:'Louer', component: LouerComponent},
  {path:'Contacts', component: ContactsComponent},
  {path:'Connexion', component: ConnexionComponent},
  {path:'Creercompte', component: CreercompteComponent},
  {path:'DetailPropriete/:id', component: DetailProprieteComponent},
  {path:'appartement', component: MaisonsavendreComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  //importé apres la configuration des routes
  exports: [RouterModule],
})

export class AppRoutingModule { }
