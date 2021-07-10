import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendre',
  templateUrl: './vendre.component.html',
  styleUrls: ['./vendre.component.css']
})
export class VendreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(Form){
    /*console.log('submit works');
    console.log(Form);  //POur voir la structure de ngForm dans la console et si les valeurs saisis s'affichent
*/
  }

}
