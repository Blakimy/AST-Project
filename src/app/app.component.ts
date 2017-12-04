import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
    netImage:any = "../assets/logoAston.png";
    ngOnInit(): void {
    }

}
