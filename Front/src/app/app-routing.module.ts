import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "view",
    component: ViewComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "",
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
