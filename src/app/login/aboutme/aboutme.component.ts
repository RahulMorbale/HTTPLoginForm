import { AppService } from './../Service/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

  constructor(private service:AppService) { }
  image:any
  about:any
  note:any
  ngOnInit(): void {
  this.service.getaboutme().subscribe((value:any)=>{
    this.image=value.src
    this.about=value.about
    this.note=value.p
    
  })
  }

}
