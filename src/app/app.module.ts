import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { NavComponent } from './navbar.component';
import { TrainersListComponent } from './trainers-list/trainers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PeopleListComponent,
    TrainersListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
