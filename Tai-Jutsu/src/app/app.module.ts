import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmailComponent } from './email/email.component';
import { TelefoonnummerComponent } from './telefoonnummer/telefoonnummer.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { MediaComponent } from './media/media.component';
import { ContactComponent } from './contact/contact.component';
import { LocatieComponent } from './locatie/locatie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmailComponent,
    TelefoonnummerComponent,
    FooterComponent,
    BodyComponent,
    MediaComponent,
    ContactComponent,
    LocatieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
