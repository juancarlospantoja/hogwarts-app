import { HowartsModule } from './views/hogwarts/hogwarts.module';
import { JLayoutComponent } from './containers/j-layout/j-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {
    path: '',
    component: JLayoutComponent,
    data: {
      title: 'HOGWARTS'
    },
    children: [
      {
        path: '',
        loadChildren: './views/hogwarts/hogwarts.module#HowartsModule'

      },
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
