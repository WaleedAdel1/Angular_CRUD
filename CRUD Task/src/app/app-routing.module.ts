import { PageNotFoundComponent } from './Component/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeesComponent } from './Component/list-employees.component';
import { CreateEmployeeComponent } from './Component/create-employee.component';
import { CreateEmployeeGaurdService } from './Services/create-employee-gaurd.service';


const routes: Routes = [
  {path: 'list', component: ListEmployeesComponent},
  {
    path: 'edit/:id',
    component: CreateEmployeeComponent,
    canDeactivate: [CreateEmployeeGaurdService]
  },
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  {
    path: 'notFound',
    component: PageNotFoundComponent
  },
  {
      path: '**',
      component: PageNotFoundComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
