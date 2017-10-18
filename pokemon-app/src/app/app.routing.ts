import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { PokemonDashboardComponent } from './pokemon/pokemon-dashboard/pokemon-dashboard.component';
import { PokemonViewComponent } from './pokemon/pokemon-view/pokemon-view.component';

const routesConfig: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dashboard', component: PokemonDashboardComponent},
  {path: 'pokemon-view', component: PokemonViewComponent},
];

export const routerModule = RouterModule.forRoot(routesConfig, {
  enableTracing: true
});