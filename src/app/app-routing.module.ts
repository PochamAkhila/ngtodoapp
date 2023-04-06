import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TodoComponent } from './pages/todo/todo.component';
import { FormComponent } from './pages/form/form.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CardComponent } from './pages/card/card.component';
import { IdCardComponent } from './pages/id-card/id-card.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch:"full"
  },
  {
    path: "todo",
    component:TodoComponent
  },
  {
    path: "todo/:id",
    component:TodoComponent
  },
  {
    path:"form",
    component:FormComponent
  },
  {
    path:"card",
    component:CardComponent
  },
  {
    path:"id-card",
    component:IdCardComponent
  },
  {
    path: "**",
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
