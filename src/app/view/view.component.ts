import { Component } from '@angular/core';
import { FlowerService } from '../flower.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
data: any;
constructor(private s1 : FlowerService){}

ngOnInit():void{
  let response = this.s1.viewservice();
  response.subscribe((data1)=>this.data=data1);
}

}
