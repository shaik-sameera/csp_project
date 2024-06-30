import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellComponent } from './sell/sell.component';
import { HomeComponent } from './home/home.component';
import { OptComponent } from './opt/opt.component';
import { ReadComponent } from './read/read.component';
import { DeleteComponent } from './delete/delete.component';
import { ChComponent } from './ch/ch.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FComponent } from './f/f.component';
import { DotComponent } from './dot/dot.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path:'sell',
    component:SellComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'opt',
    component:OptComponent
  },
  {
    path:'read',
    component:ReadComponent
  },
  {
    path:'delete',
    component:DeleteComponent
  },
  {
    path:'ch',
    component:ChComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'f',
    component:FComponent
  },
  {
    path:'dot',
    component:DotComponent
  },
  {
    path:'main',
    component:MainComponent
  },
  {
    path:'p',
    component:FComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact-us',
    component:ContactUsComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'update',
    component:UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
