import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: MainComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'recipes', component: RecipesComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
