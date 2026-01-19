import { Injectable } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { PlaybookModel } from './playbook.model';
import { Observable, of, switchMap } from 'rxjs';
import { PlayersModel } from '../shared/players.model';

@Injectable({
  providedIn: 'root',
})
export class PlaybookService {
  constructor(private _apiService: ApiService) {}
  
  public fetchPlaybook(id: string): Observable<PlaybookModel> {
    return this._apiService.fetchPlayers().pipe(
      switchMap(
        (players: PlayersModel) => of(this._transformPlayers(players, id)),
      )
    )
  }

  private _transformPlayers(players: PlayersModel, playbookName: string): PlaybookModel {
    const playbook = players[playbookName];
    return {
      name: playbook.name,
      description: playbook.description,
      moves: playbook.playbookMoves.map(
        (move, index) => {
          return {
            id: "move-" + move.name + "-" + index,
            name: move.name,
            description: move.description,
            bMarked: move.checked,
          }
        }
      ),
      // masksUsed:  0,
      // masksTotal: -2 + Object.entries(playbook["The Mask Of The Future"]).length + Object.entries(playbook["The Mask Of The Past"]).length,
      dawnQuestions: playbook.dawnQuestions.map( (val, index) => {return {id: "dq-" + index, description: val.description, bEditable: val.editable, bMarked: val.checked}}),
      conditions: playbook.conditions,
      abilities: ApiService.convertAbilities(playbook),
      masks: this._transformToMasks(playbook),
    }
  }

  private _transformToMasks(playbook: {masks: {type: string; name: string; description: string;editable: boolean;checked: boolean;}[]}): Map<string,{id: string; description: string; name: string; bMarked: boolean}[]> {
    const result = new Map<string, {id: string; description: string; name: string; bMarked: boolean}[]>();

    for(const mask of playbook.masks) {
      const convertedMask = {
        id: mask.type + mask.name,
        description: mask.description,
        name: mask.name,
        bMarked: mask.checked,
      };
      if(result.get(mask.type) === undefined) {
        result.set(mask.type, [convertedMask] );
      } else {
        result.get(mask.type)?.push(convertedMask);
      }
    }
    return result;
  }
}
