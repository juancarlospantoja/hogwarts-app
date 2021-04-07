import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

/**
 * Componente para el modulo de activar libretas.
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class Dashboard{

  constructor(
    private router: Router
  ) {

  }

  /**
   * Función que permite iniciar
   */
  async ngOnInit() {

  }

  btnActivarLibretas(){
    this.router.navigate(['/ocara/activar_libreta'])
  }

  btnCargaAcademica(){
    this.router.navigate(['/ocara/carga_academica'])
  }

  btnCalificaciones(){
    this.router.navigate(['/ocara/calificaciones_est'])
  }
}
