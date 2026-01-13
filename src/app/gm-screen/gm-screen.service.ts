import { Injectable } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { GmScreenItemModel } from './gm-screen-item/gm-screen-item.model';
import { Observable, of, switchMap } from 'rxjs';
import { PlayersModel } from '../shared/players.model';

const PLAYBOOK_SAMPLES = [{
          name: "The 'Merican",
          masksUsed: 4,
          masksTotal: 7,
          dawnQuestions: [
            {description: "Did you do something to cause others to question your sexuality?"},
            {description: "Have you compromised the integrity of a banana?"},
            {description: "Did you do something just because you felt like it?"},
          ],
          conditions: [
            "Opium-Addled",
            "Phantom Limb Pain",
          ],
          abilities: {
            vitality: 2,
            composure: 0,
            reason: 0,
            presence: 2,
            sensitivity: 1,
          }
        } as GmScreenItemModel];

@Injectable({
  providedIn: 'root',
})
export class GmScreenService {
  constructor(private _apiService: ApiService) {}

  public fetchPlaybooks(): Observable<GmScreenItemModel[]> {
    return this._apiService.fetchPlayers().pipe(
      switchMap(
        (players: PlayersModel) => {
          const transformedPlayers: GmScreenItemModel[] = [];
            console.log(players);
          for(const[_, playbook] of Object.entries(players)) {
            transformedPlayers.push({
              name: playbook.Name,
              masksUsed:  0,
              masksTotal: -2 + Object.entries(playbook["The Mask Of The Future"]).length + Object.entries(playbook["The Mask Of The Past"]).length,
              dawnQuestions: Object.values(playbook["Dawn Questions"]).map( (val, index) => {return {description: val, marked: index < 5}}),
              conditions: playbook.Conditions,
              abilities: {
                vitality: playbook.Abilities.Vitality,
                composure: playbook.Abilities.Composure,
                reason: playbook.Abilities.Reason,
                presence: playbook.Abilities.Presence,
                sensitivity: playbook.Abilities.Sensitivity,
              }
            });
          }
          return of(transformedPlayers);
        },
      )
    )
  }  
  
}
