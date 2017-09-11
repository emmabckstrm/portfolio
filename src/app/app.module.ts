import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MasonryModule } from 'angular2-masonry';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { GridComponent } from './grid/grid.component';
import { GridItemComponent } from './grid-item/grid-item.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectPageComponent } from './project-page/project-page.component';

//Services
import { PortfolioItemsService } from './portfolio-items.service';

const appRoutes: Routes = [
  //{ path: 'admin', component: AdminComponent },
  { path: 'project/:id',
    component: ProjectPageComponent 
  },
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  { path: 'home',
    redirectTo: '/',
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    GridComponent,
    GridItemComponent,
    HeaderComponent,
    HomeComponent,
    NavComponent,
    PageNotFoundComponent,
    PortfolioComponent,
    ProjectPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MasonryModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PortfolioItemsService, {provide: APP_BASE_HREF, useValue : '/portfolio' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
