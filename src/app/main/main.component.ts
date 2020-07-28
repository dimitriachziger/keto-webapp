import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('You are running jQuery version: ' + $.fn.jquery)

   $(document).ready(function() {
    alert('I am Called From jQuery');
  });

  }



}
