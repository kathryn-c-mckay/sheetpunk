import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PlaybookService } from './playbook.service';
import { AbilitiesComponent } from '../shared/abilities/abilities.component';
import { PlaybookModel } from './playbook.model';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'shepu-playbook',
  imports: [RouterLink, AsyncPipe, AbilitiesComponent],
  templateUrl: './playbook.component.html',
})
export class PlaybookComponent implements OnInit {
  public playbookData = signal<PlaybookModel | undefined>(undefined);
  public bPlaybookLoading = signal(true);
  private _activatedRoute = inject(ActivatedRoute);
  private _destroyRef = inject(DestroyRef);
  private _id = signal('');
  private _id$: Observable<string | undefined> = of();


  constructor(private _playbookService: PlaybookService) {
    const arSubscription = this._activatedRoute.params.subscribe(
      (params) => {
        this._id.set(params['id']);
      }
    )
    this._id$ = toObservable(this._id);

    this._destroyRef.onDestroy(() => {
      arSubscription.unsubscribe();
    })
  }

  ngOnInit() {
    const idSubscription = this._id$.subscribe( (x) => this._doFetchPlaybook(x || ""));

    this._destroyRef.onDestroy(() => {
      idSubscription.unsubscribe();
    })
  }

  private _doFetchPlaybook(id: string): void {
    console.log('got ' + id);
    const pbSubscription = this._playbookService.fetchPlaybook(id).subscribe(
      (playbook) => {
        console.log('found the playbook!')
        this.playbookData.set(playbook);
        setTimeout(() => {
          this.bPlaybookLoading.set(false);
        }, 10000);
      }
    )
    this._destroyRef.onDestroy(() => {
      pbSubscription.unsubscribe();
    });

  }
}
