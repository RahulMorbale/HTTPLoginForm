import { AppService } from './../Service/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor(private service: AppService) { }
  educationdetails: any
  heading1:any
  desc1:any
  heading2:any
  desc2:any
  heading3:any
  desc3:any
  ngOnInit(): void {
    this.service.getEducation().subscribe((res: any) => {
      this.educationdetails = res.EducationDetails
      this.heading1=res.heading1
      this.desc1=res.desc1
      this.heading2=res.heading2
      this.desc2=res.desc2
      this.heading3=res.heading3
      this.desc3=res.desc3
    })
  }

}
