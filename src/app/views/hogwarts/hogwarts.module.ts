import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ViewsRoutes } from './hogwarts.routing';
import { Dashboard } from './dashboard/dashboard.component';
import { Students } from './students/students.component';
import { Teachers } from './teachers/teachers.component';
import { ModalModule} from 'ngx-bootstrap/modal';





@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ViewsRoutes),
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()

  ],
  declarations: [
    Dashboard,
    Students,
    Teachers
  ],
  providers: [
    // { provide: MAT_DATE_LOCALE, useValue: 'es-CO' },
  ],
})
export class HowartsModule { }
