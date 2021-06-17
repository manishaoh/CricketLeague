import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { VenueComponent } from './venue/venue.component';
import { MatchesComponent } from './matches/matches.component';
import { ResultsComponent } from './results/results.component';
import { TournamentscoretableComponent } from './tournamentscoretable/tournamentscoretable.component';

const routes: Routes = [
  { path: "", redirectTo: "/countries", pathMatch: "full" },
  { path: "countries", component: CountriesComponent },
  { path: "teams", component: TeamsComponent },
  { path: "players", component: PlayersComponent },
  { path: "venue", component: VenueComponent },
  { path: "matches", component: MatchesComponent },
  { path: "results", component: ResultsComponent },
  { path: "tournamentscoretable", component: TournamentscoretableComponent },
  { path: "*", component: CountriesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
