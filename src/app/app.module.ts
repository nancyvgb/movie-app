import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponentComponent } from './navigation-component/navigation-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { MovieItemComponent } from './movie-item/movie-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponentComponent,
    HomeComponentComponent,
    MovieItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
