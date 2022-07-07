import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }
  getdata() {
    let url = 'assets/Data/UserDetails.json'
    return this.http.get(url)
  }
  getaboutme() {
    let url = 'assets/Data/AboutMe.json'
    return this.http.get(url)
  }
  getEducation() {
    let url = 'assets/Data/Education.json'
    return this.http.get(url)
  }
  getExperience() {
    let url = 'assets/Data/Experience.json'
    return this.http.get(url)
  }
  getContact() {
    let url = 'assets/Data/ContactMe.json'
    return this.http.get(url)
  }
  postdata(body: any) {
    let url = 'assets/Data/UserDetails.json'
    return this.http.post(url, body)
  }
  getjsondata() {
    let url = 'http://localhost:3000/users'
    return this.http.get(url)
  }
  postjsondata(body:any) {
    let url = 'http://localhost:3000/users'
    return this.http.post(url,body)
  }
  
  getjsonexp(){
    let url='  http://localhost:3000/Experience'
    return this.http.get(url)
  }
}
