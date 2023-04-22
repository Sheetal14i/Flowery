import { Component,OnInit, } from '@angular/core';
import{FlowerService,}from'../flower.service';



@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
  
})

export class InsertComponent 
 {
constructor(private s1:FlowerService){}
 

ngOnInit():void{}

insertflower(insertform:{value:any;}){
  return this.s1.insertservice(insertform.value).subscribe();
}

}
