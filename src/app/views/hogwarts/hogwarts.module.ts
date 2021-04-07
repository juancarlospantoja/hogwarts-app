import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ViewsRoutes } from './hogwarts.routing';
import { Dashboard } from './dashboard/dashboard.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ViewsRoutes),
    FormsModule,
    ReactiveFormsModule,

  ],
  declarations: [
    Dashboard
  ],
  providers: [
    // { provide: MAT_DATE_LOCALE, useValue: 'es-CO' },
  ],
})
export class HowartsModule { }
