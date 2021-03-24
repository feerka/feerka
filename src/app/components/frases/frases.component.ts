import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Frases } from '../../interface';


@Component({
  selector: 'app-frases',
  templateUrl: './frases.component.html',
  styleUrls: ['./frases.component.css']
})
export class FrasesComponent implements OnInit {



  data: Object;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getFrase();
  }
  
  getFrase() {
  return this.http.get("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&jsonp=?&lang=en")
  .subscribe( resp=>  {
   
    console.log (resp)})
    
}
}
