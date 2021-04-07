import { Dashboard } from './dashboard/dashboard.component';
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

    ]
  }
];
