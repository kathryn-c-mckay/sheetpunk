import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, of } from 'rxjs';
import { PlayersModel } from './players.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _httpClient: HttpClient) {}

  public fetchPlayers(): Observable<PlayersModel> {
    return this._httpClient.get<PlayersModel>(environment.ENDPOINT_PLAYERS);
  }

}
