import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MasonryModule } from 'angular2-masonry';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { GridItemComponent } from './grid-item/grid-item.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { RightSideComponent } from './right-side/right-side.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectPageComponent } from './project-page/project-page.component';
//Services
import { PortfolioItemsService } from './portfolio-items.service';


const appRoutes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'project/:id',
    component: ProjectPageComponent 
  },
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  { path: 'h',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    GridItemComponent,
    AboutComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    NavComponent,
    AdminComponent,
    HomeComponent,
    PageNotFoundComponent,
    LeftSideComponent,
    RightSideComponent,
    PortfolioComponent,
    ProjectPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MasonryModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PortfolioItemsService],
  bootstrap: [AppComponent]
})



export class AppModule { }
