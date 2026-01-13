import { Component, input } from '@angular/core';
import { AbilitiesModel } from './abilities.model';

@Component({
  selector: 'shepu-abilities',
  imports: [],
  templateUrl: './abilities.component.html',
})
export class AbilitiesComponent {
  public abilities = input.required<AbilitiesModel>();
}
