import { Injectable } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Injectable({
  providedIn: 'root',
})
export class PlaybookService {
  constructor(private _apiService: ApiService) {}
  
  public fetchPlaybook() {
    this._apiService.fetchPlayers().subscribe((playbooks) => {
      console.log(playbooks);
    });
  }
}
