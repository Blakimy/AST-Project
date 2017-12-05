import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var jQuery :any;
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      $(function(){
          $("#voir-projets").on("click",function(){
              $("#cacher-table").toggle('#cacher-table')
          });
      });

  }

}

