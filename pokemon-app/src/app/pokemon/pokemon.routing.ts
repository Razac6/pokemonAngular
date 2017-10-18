import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';
import { PokemonDashboardComponent } from './pokemon-dashboard/pokemon-dashboard.component';

const routes: Routes = [
  {path: 'pokemon-view', component: PokemonViewComponent},
  {path: 'pokemon-dashboard', component: PokemonDashboardComponent},
];

export const PokemonRouter: ModuleWithProviders = RouterModule.forChild(routes);