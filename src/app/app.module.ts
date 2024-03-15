import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CardModule } from 'primeng/card';
import { HomeComponent } from './components/home/home.component';
import { ContentPageComponent } from './components/content-page/content-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CollaboratorsPageComponent } from './components/collaborators-page/collaborators-page.component';
import { PageWrapperComponent } from './components/page-wrapper/page-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentPageComponent,
    CollaboratorsPageComponent,
    PageWrapperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    PanelMenuModule,
    CardModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
