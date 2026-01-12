import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GmScreenService } from './gm-screen.service';

@Component({
  selector: 'shepu-gm-screen',
  imports: [RouterLink],
  templateUrl: './gm-screen.component.html',
})
export class GmScreenComponent {
  constructor(private _gmScreenService: GmScreenService) {}
}
