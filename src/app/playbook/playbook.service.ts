import { Injectable } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { PlaybookModel } from './playbook.model';
import { Observable, of, switchMap } from 'rxjs';
import { PlayersModel } from '../shared/players.model';
import { AbilitiesModel } from '../shared/abilities/abilities.model';

@Injectable({
  providedIn: 'root',
})
export class PlaybookService {
  constructor(private _apiService: ApiService) {}
  
  public fetchPlaybook(): Observable<PlaybookModel> {
    return this._apiService.fetchPlayers().pipe(
      switchMap(
        (players: PlayersModel) => of(this._transformPlayers(players, "American")),
      )
    )
  }  

  private _transformPlayers(players: PlayersModel, playbookName: string) {
    const playbook = players[playbookName];
    return {
      name: playbook.Name,
      description: playbook.Description,
      moves: Object.entries(playbook["Playbook Moves"]).map(
        ([moveName, description], index) => {
          return {
            id: "move-" + moveName + "-" + index,
            name: moveName,
            description: description,
            bMarked: false,
          }
        }
      ),
      // masksUsed:  0,
      // masksTotal: -2 + Object.entries(playbook["The Mask Of The Future"]).length + Object.entries(playbook["The Mask Of The Past"]).length,
      dawnQuestions: Object.values(playbook["Dawn Questions"]).map( (val, index) => {return {id: "dq-" + index, description: val, bMarked: index < 5}}),
      conditions: playbook.Conditions,
      abilities: {
        vitality: playbook.Abilities.Vitality,
        composure: playbook.Abilities.Composure,
        reason: playbook.Abilities.Reason,
        presence: playbook.Abilities.Presence,
        sensitivity: playbook.Abilities.Sensitivity,
      } as AbilitiesModel,
      masks: this._transformToMasks(players),
    }
  }

  private _transformToMasks(players: PlayersModel): {id: string; maskTypeName: string; maskData: {id: string; description: string; name: string; bMarked: boolean}[]}[] {
    return [
          {
            id: "m-0-otp",
            maskTypeName: "The Mask of the Past",
            maskData: [
              {
                id: "motp-0",
                description: "blah",
                name: "blah",
                bMarked: false,
              }
            ],
          },
          {
            id: "m-1-otf",
            maskTypeName: "The Mask of the Future",
            maskData: [
              {
                id: "motf-0",
                description: "blah",
                name: "blah",
                bMarked: false,
              }],
          },
        ];
  }
}
