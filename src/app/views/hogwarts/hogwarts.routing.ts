import { Dashboard } from './dashboard/dashboard.component';
import { Students } from './students/students.component';
import { Teachers } from './teachers/teachers.component';

import { Routes } from '@angular/router';



export const ViewsRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'HOGWARTS'
    },
    children: [

      {
        path: 'seccion_personajes',
        component: Dashboard,
        data: {
          title: 'Sección de personajes'
        }
      },
      {
        path: 'seccion_estudiantes',
        component: Students,
        data: {
          title: 'Sección de estudiantes'
        }
      },
      {
        path: 'seccion_profesores',
        component: Teachers,
        data: {
          title: 'Sección de profesores'
        }
      },

    ]
  }
];
