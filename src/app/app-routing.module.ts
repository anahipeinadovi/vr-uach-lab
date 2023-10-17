import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContentPageComponent } from './components/content-page/content-page.component';
import { HomeComponent } from './components/home/home.component';
import { ContentComponent } from './components/content/content.component';


const routes: Routes = [
  {path: 'article/:id', component: ContentPageComponent},
  {path: '', component: HomeComponent,pathMatch: 'full'},
  // {path: '**', redirectTo: '', pathMatch: 'full'},
  {path: 'hola', component: ContentComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
