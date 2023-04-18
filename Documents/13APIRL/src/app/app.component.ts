import { Component,OnInit } from '@angular/core';
import {UsersDataService} from './users-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '13APIRL';
users:any;
x:any
res:any
constructor(private userData:UsersDataService){}
  ngOnInit(): void {
    this.getData();
  }
public getData() {
  this.userData.ruby().subscribe((x)=>{
  this.x = x;
    //  console.log("data",data);
    
   });

}
onClick(event:any) {
  console.log('Button clicked!');
  console.log('event', event);

}
public datapost(){
  const data={
    "userId": 1,
    "id": 1,
    "title": "balachandran",
    "body": "poovitha"
  }
  this.userData.datapost(data).subscribe((res:any)=>{
    console.log(res);
    this.getData()
    
  })
 }

 delete(id:any){
  console.log('del id', id);
  this.userData.deletedata(id).subscribe((res:any)=>{
    console.log('delete res', res);
  })
 }
 
}
