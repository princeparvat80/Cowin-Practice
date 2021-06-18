import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-select-by-district',
  templateUrl: './select-by-district.component.html',
  styleUrls: ['./select-by-district.component.css']
})
export class SelectByDistrictComponent implements OnInit {

  constructor(private auth: AuthService) { 
    this.auth.getData().subscribe(data=>{
      console.warn(data)
    })
  }

  ngOnInit() {
    this.state = this.auth.state();
    
    console.log(this.state);

  }
  state:any=[];
  city:any=[];
  
  

  onSelect(state:any){
    this.city = this.auth.city().filter(e=>e.id == state.target.value);  
    console.log(this.city);
  }

}
