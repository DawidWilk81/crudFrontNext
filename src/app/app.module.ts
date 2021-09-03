import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component'; 
import { HttpClientModule } from '@angular/common/http';
import { FilmService } from './film.service';
import { RouterModule } from '@angular/router';
import { AddContentComponent } from './add-content/add-content.component';
import { ModifyContentComponent } from './modify-content/modify-content.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    AddContentComponent,
    ModifyContentComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    NgbModule,
    
  
    
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
