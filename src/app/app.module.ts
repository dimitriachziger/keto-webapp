import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { DetailComponent } from './detail/detail.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';

// const appRoutes: Routes = [
//   { path: 'recipe-detail', component: RecipeDetailComponent },
//   { path: 'recipes', component: RecipesComponent },
// ];

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    DetailComponent,
    MainComponent,
    FooterComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
