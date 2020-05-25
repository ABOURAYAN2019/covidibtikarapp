import { Component, OnInit } from '@angular/core';
 import {CoviddataService}  from '../coviddata.service'
@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
  donnee : any ;
  constructor( public dataservice :  CoviddataService) { }

  ngOnInit(): void {
  this.dataservice.getdata().subscribe((data) =>  {this.donnee= data ;  console.log(data)}
  
  )

  }

}
