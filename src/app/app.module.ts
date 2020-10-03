import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './index/header/header.component';
import { ContentComponent } from './index/content/content.component';
import { LoginComponent } from './index/content/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    IndexComponent,
    HeaderComponent,
    ContentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
