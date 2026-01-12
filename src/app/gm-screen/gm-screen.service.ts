import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class GmScreenService {
  constructor(private _apiService: ApiService) {}
  
  
}
