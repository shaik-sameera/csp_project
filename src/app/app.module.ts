import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellComponent } from './sell/sell.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OptComponent } from './opt/opt.component';
import { ReadComponent } from './read/read.component';
import { DeleteComponent } from './delete/delete.component';
import { UserComponent } from './user/user.component';
import { BioPComponent } from './bio-p/bio-p.component';
import { ChComponent } from './ch/ch.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FComponent } from './f/f.component';
import { DotComponent } from './dot/dot.component';
import { MainComponent } from './main/main.component';
import { RouterModule,Routes } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PComponent } from './p/p.component';
import {MatIconModule} from '@angular/material/icon';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UpdateComponent } from './update/update.component';
import { SamComponent } from './sam/sam.component';
@NgModule({
  declarations: [
    AppComponent,
    SellComponent,
    HomeComponent,
    OptComponent,
    ReadComponent,
    DeleteComponent,
    UserComponent,
    BioPComponent,
    ChComponent,
    LoginComponent,
    RegisterComponent, 
    FComponent, DotComponent, MainComponent, AboutComponent, ContactComponent, PComponent, ContactUsComponent, UpdateComponent, SamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule,

    RouterModule.forRoot([
      {
        path:'',redirectTo:'/f',pathMatch:'full'
      }
    ]),
     BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
