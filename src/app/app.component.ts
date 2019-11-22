import { Component,OnInit } from '@angular/core';
import {GeneralService} from './services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  locFile:any;
  userData:any ={};
  fdata:any;
  data:any;
  keyword:any;
  constructor(private gservice:GeneralService){
    this.keyword = 'name';
  this.data = [
     {
       id: 1,
       name: 'Usa'
     },
     {
      id: 1,
      name: 'Uk'
      },
      {
        id: 1,
        name: 'Japan'
      },
     {
       id: 2,
       name: 'England'
     }
  ];
  }
  ngOnInit() {
  }

  fileUpload(event:any){
    this.locFile=event.target.files[0];
  }

  
  createLocation(){ 
    let fmdata =  new FormData();
    fmdata.append('productImage',this.locFile,this.locFile.name);
    //fmdata.append('email',this.userData.email);
    // this.gservice.post('/uploadfile',fmdata).subscribe(res=>{
    //   console.log('Response',res);
    // })
  }
  selectEvent(item) {
    // do something with selected item
    console.log('seleted item',item);
  }
 
  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    // do something when input is focused
  }

}
