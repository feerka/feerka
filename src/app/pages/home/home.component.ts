import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy{
  nombre: string;
  constructor() { }

  ngOnInit(): void {
    let a=0;
    while(a<30){

      this.nombre = "FEERKA";
      a++;
    }
  }
  ngOnDestroy(): void{
    this.nombre= "";
  }

}
