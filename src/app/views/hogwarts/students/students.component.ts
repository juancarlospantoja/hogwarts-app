import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HogwartsService } from '../../../app-core/services/hogwarts-services/hogwarts.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { ChangeDetectorRef, TemplateRef,ViewChild, Input } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';

//import { ModalDirective } from 'ngx-bootstrap';


/**
 * Componente para el modulo de activar libretas.
 */
 @Component({
  selector: 'body',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
 export class Students{
  @ViewChild('childModal', {  }) childModal: ModalDirective;
  ye:number=0;
  public info_usuario;
  lista:string[]=["slytherin","gryffindor","ravenclaw", "hufflepuff"];
  Users:string[]=[];
  paisFormulario: FormGroup;
  public modalRefHoja: any;
  public addEst: any;
  constructor(
    private router: Router,
    private serviceCalificacionesEst: HogwartsService,
    private serviceModal: BsModalService
    ) {
    this.paisFormulario = new FormGroup({
      pais: new FormControl(null)
    });
  }

  /**
   * Función que permite iniciar
   */
   async ngOnInit() {
    this.ye = new Date().getFullYear();
    this.Users = await this.serviceCalificacionesEst.getStudents().toPromise();
    this.addEst = {};
  }

  async capturar() {
    this.Users = await this.serviceCalificacionesEst.getStudents().toPromise();    
  } 

  characterAge(yearOfBirth) {
    this.ye = new Date().getFullYear();
    if(yearOfBirth){
      let age = this.ye-yearOfBirth
      return age;
    }    
  }

  addStudents(variable) {
    this.addEst.name = variable.name;
    this.addEst.patronus = variable.patronus;
    this.addEst.yearOfBirth=variable.age;
    this.addEst.image='assets/img/harry-potter-01.png'
    this.Users.push(this.addEst)
    //$("#modalRefHoja").modal("hide");
    this.modalRefHoja.hide();
    console.log("varriable****",this.Users)

  }

  async mostrarHojaVida(modal) {
    console.log("modal demo****")
    this.modalRefHoja = this.serviceModal.show(modal, { class: "modal-hv", ignoreBackdropClick: true });
  } 



}

