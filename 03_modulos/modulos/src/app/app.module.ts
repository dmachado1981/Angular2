import { LogoComponent } from './shared/logo/logo.component';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [    
    AppComponent,    
  ],
  exports :[LogoComponent],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
