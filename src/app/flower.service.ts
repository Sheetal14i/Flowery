import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FlowerService {
  inserturl = "http://localhost:9006/insertflower"
  updateurl = "http://localhost:9006/updateflower"
  deleteurl = "http://localhost:9006/deleteflower"
  viewurl = "http://localhost:9006/viewflower"

  constructor(private h1 : HttpClient) { }
  
  insertservice(data:any){
    return this.h1.post(this.inserturl,data);
  }

  updateservice(data:any){
    return this.h1.post(this.updateurl,data);
  }

  deleteservice(data:any){
    return this.h1.post(this.deleteurl,data);
  }

  viewservice(){
    return this.h1.get(this.viewurl);
  }
}
