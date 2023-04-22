import { Component } from '@angular/core';
import { FlowerService } from '../flower.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  constructor(private s1:FlowerService){}

  ngOnit():void{}

  deleteflower(deleteform:{value:any;}){
    return this.s1.deleteservice(deleteform.value).subscribe();
  }

}
