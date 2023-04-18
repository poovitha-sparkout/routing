import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
  { path: 'update', component: UpdateComponent },
  { path: 'testing', component:TestingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




