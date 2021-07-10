
import { Component, OnInit } from '@angular/core';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: any;

  constructor(private housingservice: HousingService) { }

  ngOnInit(): void {

    this.housingservice.getAllProperties().subscribe(
      data =>{
            this.properties=data;
            console.log(data);
          }
    )

  }

}
