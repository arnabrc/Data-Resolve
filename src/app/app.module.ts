import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { DataResolver } from './data-resolver';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent, pathMatch: 'full' },
      { path: 'details', component: DetailsComponent, pathMatch: 'full', resolve: {data: DataResolver} },
      // { path: 'home', component: HomeComponent, pathMatch: 'full' },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '*', component: HomeComponent },
      { path: '**', component: HomeComponent }
    ])
  ],
  providers: [DataResolver],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
