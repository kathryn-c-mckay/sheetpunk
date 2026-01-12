import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PlaybookService } from './playbook.service';

@Component({
  selector: 'shepu-playbook',
  imports: [RouterLink],
  templateUrl: './playbook.component.html',
})
export class PlaybookComponent implements OnInit {
  public playbookData = {
    name: "The 'Merican",
    abilities: {
      vitality: 1,
      composure: 0,
      reason: 0,
      presence: 1,
      sensitivity: 0,
    },
    conditions: [ "Opium-Addled" ]
  }

  constructor(private _playbookService: PlaybookService) {}

  

  ngOnInit() {
    this._playbookService.fetchPlaybook();
  }
}
