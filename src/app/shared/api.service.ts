import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, of } from 'rxjs';
import { PlayersModel } from './players.model';
import { AbilitiesModel } from './abilities/abilities.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _httpClient: HttpClient) {}

  public fetchPlayers(): Observable<PlayersModel> {
    return this._httpClient.get<PlayersModel>(environment.ENDPOINT_PLAYERS);
  }

  
  public static convertAbilities(player: {abilities: {description: string; value: number;}[]}): AbilitiesModel {
    const abilities: {[ability:string]: number} = {};
    player.abilities.forEach((ability) => {
      abilities[ability.description] = ability.value;
    });
    return {
      vitality: abilities['Vitality'] || 0,
      composure: abilities['Composure'] || 0,
      reason: abilities['Reason'] || 0,
      presence: abilities['Presence'] || 0,
      sensitivity: abilities['Sensitivity'] || 0,

    };
  }

}
