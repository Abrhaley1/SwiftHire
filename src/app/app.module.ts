import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { myRoutes } from './app.routes';
import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {AuthService} from './services/auth.service';
import { HomeComponent } from './home/home.component';
//import { LocalStorageModule } from 'angular-2-local-storage';
import { AuthHttp,AuthConfig} from 'angular2-jwt';
import { Http, RequestOptions } from '@angular/http';
import {ApiService} from './services/api.service';
import { MembersComponent } from './members/members.component';
import { AnnouncmentpostComponent } from './announcmentpost/announcmentpost.component';
import { AgmCoreModule } from 'angular2-google-maps/core';

//import { MemberdetailsComponent } from './memberdetails/memberdetails.component';
import { MyPipePipe } from './my-pipe.pipe';



export function authHttpServiceFactory(http: Http, options: RequestOptions) {
 return new AuthHttp(new AuthConfig({
  tokenName: 'id_token',
  //  noJwtError: true,
		tokenGetter: (() => localStorage.getItem('id_token')),
		globalHeaders: [{'Content-Type':'application/json'}],
	}), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,    
    HomeComponent,    
    MyPipePipe,    
    MembersComponent,    
    AnnouncmentpostComponent,
    //MemberdetailsComponent, 
    MyPipePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    myRoutes,
  
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCCWerYWeQRugBVFH4cOMYNomdY6Pa3bRg'
    })
  ],
  providers: [AuthService,{
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
