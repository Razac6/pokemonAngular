import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from './pokemon.service';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';
import { routerModule } from './../app.routing';

@NgModule({
  imports: [
    CommonModule,
    routerModule
  ],
  declarations: [PokemonViewComponent],
  providers: [ PokemonService ]
})
export class PokemonModule { }
