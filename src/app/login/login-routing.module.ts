import { UserFormComponent } from './user-form/user-form.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactmeComponent } from './contactme/contactme.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'contactme', component: ContactmeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'user', component: UserFormComponent },
  { path: '', component: LoginFormComponent },
  { path: '**', component: PagenotfoundComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
