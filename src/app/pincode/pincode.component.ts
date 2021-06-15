import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pincode',
  templateUrl: './pincode.component.html',
  styleUrls: ['./pincode.component.css']
})
export class PincodeComponent implements OnInit {

 showMe:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  toogleTag()
  {
    this.showMe=!this.showMe
  }
}
