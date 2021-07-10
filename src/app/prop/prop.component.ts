import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prop',
  templateUrl: './prop.component.html',
  styleUrls: ['./prop.component.css']
})
export class PropComponent implements OnInit {

  @Input() propriete:any   //Data Binding pour afficher les elements d'un array
  // Property: any={
  //   "Id":1,
  //   "Name": "Birla House",
  //   "Type":"House",
  //   "Price":12000
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
