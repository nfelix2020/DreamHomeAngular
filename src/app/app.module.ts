import { NgModule } from '@angular/core';
import {   HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyComponent } from './property/property.component';
import { PropComponent } from './prop/prop.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { from } from 'rxjs';
import { HousingService } from './housing.service';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AcheterComponent } from './acheter/acheter.component';
import { VendreComponent } from './vendre/vendre.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DetailProprieteComponent } from './detail-propriete/detail-propriete.component';
import { AjouterMaisonComponent } from './ajouter-maison/ajouter-maison.component';
import { AuthService } from './Services/auth.service';
import { TabsModule } from 'ngx-bootstrap/tabs';
 
import { Appart1Component } from './appart1/appart1.component';
import { BiensimilairesComponent } from './biensimilaires/biensimilaires.component';
import { FiltrerbiensComponent } from './filtrerbiens/filtrerbiens.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { MaisonsavendreComponent } from './maisonsavendre/maisonsavendre.component';
import { MaisonsalouerComponent } from './maisonsalouer/maisonsalouer.component';
import { RiadonedetailsComponent } from './riadonedetails/riadonedetails.component';
import { DetailsdubienComponent } from './detailsdubien/detailsdubien.component';
import { LouerComponent } from './louer/louer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreercompteComponent } from './creercompte/creercompte.component';
import { Louer2Component } from './louer2/louer2.component';
import { Louer3Component } from './louer3/louer3.component';
import { Vendre1Component } from './vendre1/vendre1.component';
import { Vendre2Component } from './vendre2/vendre2.component';
import { Vendre3Component } from './vendre3/vendre3.component';





@NgModule({
  declarations: [
    AppComponent,
      NavBarComponent,
      PropertyComponent,
      PropComponent,
      PropertyListComponent,
      AcceuilComponent,
      AcheterComponent,
      VendreComponent,
      ContactsComponent,
      ConnexionComponent,
   
      DetailProprieteComponent,
      AjouterMaisonComponent,
    
      Appart1Component,
      BiensimilairesComponent,
      FiltrerbiensComponent,
      FooterComponent,
      ContactComponent,
      MaisonsavendreComponent,
      MaisonsalouerComponent,
      RiadonedetailsComponent,
      DetailsdubienComponent,
      LouerComponent,
      CreercompteComponent,
      Louer2Component,
      Louer3Component,
      Vendre1Component,
      Vendre2Component,
      Vendre3Component,



   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    //Ajouté après
    HttpClientModule,
    TabsModule.forRoot(),   //Ajouté après
    ReactiveFormsModule    //formulaire
 
  ],
  providers: [HousingService,
    AuthService

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
