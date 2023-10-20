import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { FormComponentComponent } from './form-component/form-component.component';

const routes: Routes = [
  { path: '', component: TableComponent, pathMatch: 'full' },
  { path: 'userform', component: FormComponentComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
