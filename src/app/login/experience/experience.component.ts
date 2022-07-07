import { AppService } from './../Service/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor(private service: AppService) { }
  data: any
  post: any
  getjson: any
  jsonexp: any
  body = {
    name: "Ashish",
    address: "Kolhapur"
  }
  ngOnInit(): void {
    this.service.getExperience().subscribe((res: any) => {
      this.data = res.Experience
      // console.log(res)
      // this.data=JSON.stringify(res.Experience)
      // this.display=this.data
    })
    // this.service.postdata(this.body).subscribe((res: any) => {
    //   console.log(res)
    // })

    this.service.getjsondata().subscribe((res: any) => {
      console.log(res)
      this.getjson = res.users
    })
    // this.service.postjsondata(this.body).subscribe((res:any)=>{
    //   console.log(res)
    // })
    // this.service.getjsonexp().subscribe((res: any) => {
    //   this.jsonexp = res.Experience
    //   // console.log(this.jsonexp)
    // })
  }

}
