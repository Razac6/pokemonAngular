import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { PokemonViewComponent } from './pokemon/pokemon-view/pokemon-view.component';

const routesConfig: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pokemons', component: PokemonViewComponent},
];

export const routerModule = RouterModule.forRoot(routesConfig, {
  enableTracing: true
});