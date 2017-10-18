import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from './pokemon.service';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';
import { PokemonDashboardComponent } from './pokemon-dashboard/pokemon-dashboard.component';
import { PokemonRouter } from './pokemon.routing';

@NgModule({
  imports: [
    CommonModule,
    PokemonRouter
  ],
  declarations: [
  PokemonViewComponent,
  PokemonDashboardComponent],
  providers: [ PokemonService ]
})
export class PokemonModule { }
