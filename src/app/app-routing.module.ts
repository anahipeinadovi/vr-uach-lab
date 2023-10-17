import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContentPageComponent } from './components/content-page/content-page.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path: 'article/:id', component: ContentPageComponent},
  {path: '', component: HomeComponent,pathMatch: 'full'},
  // {path: '**', redirectTo: '', pathMatch: 'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
