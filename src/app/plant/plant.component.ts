import { Component, OnInit } from '@angular/core';
import { PlantModel } from '../model/plantModel';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit{
  plantData!:PlantModel[];
  dataSource:any;
  ngOnInit(): void {
    
  }

  displayColumns: string[]= ["id","name","description","latitude","longitude","yearStartDate","yearEndDate","action"];

  addDialog(){}
  applyFilter(event:Event){}
}
