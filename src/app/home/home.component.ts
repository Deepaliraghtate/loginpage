import { Component, OnInit } from '@angular/core';

import { LogService } from '../services/log.service';


interface Car {
  brand: string;
  model: string;
  year: number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  getlist:any=[];


  searchText: string | undefined;

  constructor(private service:LogService) { }

  ngOnInit(): void {
    this.get()
  }
  get(){
this.service.getLogin().subscribe((res:any)=>{
  this.getlist=res.listFilterPojo;
  console.log(res.listFilterPojo);
})
  }
}
