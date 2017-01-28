import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MasonryModule } from 'angular2-masonry';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { GridItemComponent } from './grid-item/grid-item.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    GridItemComponent,
    AboutComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MasonryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
