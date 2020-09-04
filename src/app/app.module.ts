import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app/app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { BodyComponent } from './body/body.component';
import { NutrientSearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

import{SocialAuthServiceConfig,GoogleLoginProvider,SocialLoginModule}from 'angularx-social-login';


@NgModule({
  declarations: [AppComponent, NavigationBarComponent, BodyComponent, NutrientSearchPipe, FooterComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatButtonModule,MatMenuModule,MatToolbarModule,MatIconModule,MatInputModule,MatFormFieldModule,MatCardModule,FormsModule,ReactiveFormsModule,SocialLoginModule,AppRoutingModule],
  providers: [{
    provide:'SocialAuthServiceConfig',
    useValue:{
      autoLogin:true,
      providers:[
       {
          id:GoogleLoginProvider.PROVIDER_ID,
        provider:new GoogleLoginProvider('125868646252-f276esjhec39eapn9mrua9blocjke21u.apps.googleusercontent.com')
       }
      ]
    } as SocialAuthServiceConfig
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
