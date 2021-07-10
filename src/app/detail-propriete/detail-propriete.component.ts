import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-propriete',
  templateUrl: './detail-propriete.component.html',
  styleUrls: ['./detail-propriete.component.css']
})
export class DetailProprieteComponent implements OnInit {

  public proprieteID: number;   //Declarer la proprieteID comme un nbre

  constructor(private route: ActivatedRoute) { }    //AJouter dans le contructeur ça: private route: ActivatedRoute

  ngOnInit(): void {

    this.proprieteID=this.route.snapshot.params['id']   //Ajouter cette ligne de code. id doit etre le meme nom que dans App.routing.Module
  }                                                     //Dans tslint.json, au dessus de "component-class-suffix": true, AJOUTER "no-string-literal": false,


}
