import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { GmScreenService } from './gm-screen.service';
import { GmScreenItemModel } from './gm-screen-item/gm-screen-item.model';
import { GmScreenItemComponent } from './gm-screen-item/gm-screen-item.component';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'shepu-gm-screen',
  imports: [GmScreenItemComponent, AsyncPipe],
  templateUrl: './gm-screen.component.html',
})
export class GmScreenComponent implements OnInit {
  public $items: Observable<GmScreenItemModel[]> = of([]);
  constructor(private _gmScreenService: GmScreenService) {}
  
  public ngOnInit(): void {
    this.$items = this._gmScreenService.fetchPlaybooks();
  }
}
