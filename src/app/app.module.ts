import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './common/header/header.component';
import {FooterComponent} from './common/footer/footer.component';
import {HomeComponent} from './public/home/home.component';
import {VehiclesComponent} from './public/vehicles/vehicles.component';
import {VehiclesService} from './public/vehicles/services/vehicles.service';
import {HttpClientModule} from '@angular/common/http';
import {GetImageUrlPipe} from './common/pipes/get-image-url.pipe';
import {FormsModule} from '@angular/forms';
import { LoginFormComponent } from './public/login/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    VehiclesComponent,
    GetImageUrlPipe,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [VehiclesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
