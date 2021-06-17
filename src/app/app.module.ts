import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { MatchesComponent } from './matches/matches.component';
import { PlayersComponent } from './players/players.component';
import { ResultsComponent } from './results/results.component';
import { TeamsComponent } from './teams/teams.component';
import { TournamentscoretableComponent } from './tournamentscoretable/tournamentscoretable.component';
import { VenueComponent } from './venue/venue.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    MatchesComponent,
    PlayersComponent,
    ResultsComponent,
    TeamsComponent,
    TournamentscoretableComponent,
    VenueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
