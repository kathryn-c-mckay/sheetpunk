import { Component, input } from '@angular/core';
import { GmScreenItemModel } from './gm-screen-item.model';
import { RouterLink } from '@angular/router';
import { AbilitiesComponent } from '../../shared/abilities/abilities.component';
import { PersonalQuartersComponent } from '../../shared/personal-quarters/personal-quarters.component';

@Component({
  selector: 'shepu-gm-screen-item',
  imports: [ RouterLink, AbilitiesComponent, PersonalQuartersComponent ],
  templateUrl: './gm-screen-item.component.html',
})
export class GmScreenItemComponent {
  public item = input.required<GmScreenItemModel>();
}
