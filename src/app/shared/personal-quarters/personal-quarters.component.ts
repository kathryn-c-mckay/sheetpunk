import { Component, input } from '@angular/core';

@Component({
  selector: 'shepu-personal-quarters',
  imports: [],
  templateUrl: './personal-quarters.component.html',
})
export class PersonalQuartersComponent {
  public editable = input<boolean>(true);
  public data = input.required<{name: string; checked: boolean}[]>();
}
