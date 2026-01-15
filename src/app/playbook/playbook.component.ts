import { Component, OnInit, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PlaybookService } from './playbook.service';
import { AbilitiesModel } from '../shared/abilities/abilities.model';
import { AbilitiesComponent } from '../shared/abilities/abilities.component';
import { PlaybookModel } from './playbook.model';
import { Observable, of } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'shepu-playbook',
  imports: [RouterLink, AbilitiesComponent, AsyncPipe],
  templateUrl: './playbook.component.html',
})
export class PlaybookComponent implements OnInit {
  public playbookData$: Observable<PlaybookModel> | undefined;

  constructor(private _playbookService: PlaybookService) {}

  ngOnInit() {
    this.playbookData$ = this._playbookService.fetchPlaybook();
    // TODO: remove this
    this.playbookData$.subscribe(
      (event) => {
        console.log(event);
      }
    )
  }
}
