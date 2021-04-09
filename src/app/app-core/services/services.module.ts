import { NgModule } from '@angular/core';
import { HogwartsService } from './hogwarts-services/hogwarts.service';

@NgModule({
  providers: [
    HogwartsService,
  ]
})
export class ServicesModule {
  constructor() { }
}
