import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceBase } from '../service-base';
import { Observable } from 'rxjs';

@Injectable()
export class HogwartsService extends ServiceBase {

  constructor(protected http: HttpClient) {
    super(http);
    this.ApiUrl = ['http://hp-api.herokuapp.com/api/characters'].join('/');  }

  getCharacter(nomPer): Observable<any>{
    const ruta = [this.ApiUrl, 'house',nomPer].join('/');
    return this.http.get(ruta);
  }

  getStudents(): Observable<any>{
    const ruta = [this.ApiUrl, 'students'].join('/');
    return this.http.get(ruta);
  }

  getTeachers(): Observable<any>{
    const ruta = [this.ApiUrl, 'staff'].join('/');
    return this.http.get(ruta);
  }


}