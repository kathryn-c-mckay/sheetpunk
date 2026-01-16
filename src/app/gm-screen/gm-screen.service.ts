import { Injectable } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { GmScreenItemModel } from './gm-screen-item/gm-screen-item.model';
import { Observable, of, switchMap } from 'rxjs';
import { PlayersModel } from '../shared/players.model';

@Injectable({
  providedIn: 'root',
})
export class GmScreenService {
  constructor(private _apiService: ApiService) {}

  public fetchPlaybooks(): Observable<GmScreenItemModel[]> {
    return this._apiService.fetchPlayers().pipe(
      switchMap(
        (players: PlayersModel) => of(this._transformPlayers(players)),
      )
    )
  }  

  private _transformPlayers(players: PlayersModel) {
    const transformedPlayers: GmScreenItemModel[] = [];
    for(const [id, playbook] of Object.entries(players)) {
      transformedPlayers.push({
        id: id,
        name: playbook.name,
        masksUsed:  playbook.masks.reduce((prev, next) => {
          return prev + (next.checked && next.name.toLowerCase() !== "rules" ? 1 : 0);
        }, 0),
        masksTotal: playbook.masks.reduce((prev, next) => {
          return prev + (next.name.toLowerCase() !== "rules" ? 1 : 0);
        }, 0),
        dawnQuestions: Object.values(playbook.dawnQuestions).map( (val, index) => {
          return {
            description: val.description,
            bMarked: val.checked && index >= 3
          }
        }),
        conditions: playbook.conditions,
        abilities: ApiService.convertAbilities(playbook),
        personalQuarters: playbook.personalQuarters,
      });
    }
    return transformedPlayers;
  }
  
}
