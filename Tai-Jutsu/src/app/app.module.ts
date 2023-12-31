import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { MediaComponent } from './media/media.component';
import { ContactComponent } from './contact/contact.component';
import { NavigatieComponent } from './navigatie/navigatie.component';
import { SamenwerkingComponent } from './samenwerking/samenwerking.component';
import { NieuwsComponent } from './nieuws/nieuws.component';
import { TrainingsurenComponent } from './trainingsuren/trainingsuren.component';
import { DocumentenComponent } from './documenten/documenten.component';
import { DojoComponent } from './dojo/dojo.component';
import { MediaFooterComponent } from './media-footer/media-footer.component';
import { FotogalerijComponent } from './fotogalerij/fotogalerij.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    MediaComponent,
    ContactComponent,
    NavigatieComponent,
    SamenwerkingComponent,
    NieuwsComponent,
    TrainingsurenComponent,
    DocumentenComponent,
    DojoComponent,
    MediaFooterComponent,
    FotogalerijComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      [
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        {
          path: 'nieuws',
          component: NieuwsComponent,
        },
        {
          path: 'trainingsuren',
          component: TrainingsurenComponent,
        },
        {
          path: 'dojo',
          component: DojoComponent,
        },
        {
          path: 'documenten',
          component: DocumentenComponent,
        },
        {
          path: 'samenwerking',
          component: SamenwerkingComponent,
        },
      ],
      { useHash: true }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
