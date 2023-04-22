import { Component } from '@angular/core';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  constructor(private s1:FlowerService){}

  ngOnit():void{}

  updateflower(updateform:{value:any;}){
    return this.s1.updateservice(updateform.value).subscribe();
  }
}
