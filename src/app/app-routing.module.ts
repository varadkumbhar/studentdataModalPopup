import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentAppComponent } from './student-app/student-app.component';

const routes: Routes = [
  {
    path:'',
    component:StudentAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
