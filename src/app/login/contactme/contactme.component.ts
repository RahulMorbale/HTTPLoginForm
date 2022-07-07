import { AppService } from './../Service/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss']
})
export class ContactmeComponent implements OnInit {
  constructor( private servce:AppService) { }
  contact:any
  body={
    name:"Ragini Jiotode",
    address:"Pune"
  }
  ngOnInit(): void {
    this.servce.getContact().subscribe((res:any)=>{
      this.contact=res.contactMe
    })
    this.servce.postdata(this.body).subscribe((res:any)=>{
      console.log(res)
    })

  }
}
