/**
 * @file Archivo que contiene el componente EncuestasComponent
 * @name hogwarts.component.ts
 * @author Juan Sanchez <juand.san91@hotmail.com>
 * @license UDENAR
 * @copyright 2019 Udenar
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hogwarts',
  templateUrl: './hogwarts.component.html',
//   styleUrls: ['../acceso-egresado-dashboard.component.scss']
})
/**
 * @class HogwartsComponent
 * @description Clase para hogwarts.component.ts
 */
export class HogwartsComponent implements OnInit {

  constructor(private serviceInfoUsuario: InfoUsuarioService, private hogwartsService:hogwartsService, private router:Router){
    

  }
  /**
   * @method ngOnInit
   * @description Carga la lista de hogwarts propias.
   * @memberof HogwartsComponent
   */
  async ngOnInit(){
    
  } 
  
}