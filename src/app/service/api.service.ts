import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TopAnimeResponse } from '../interface/top-anime-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getTopAnime(): Observable<TopAnimeResponse> {
    return this.httpClient.get<TopAnimeResponse>('https://api.jikan.moe/v3/top/anime');
  }
}
