import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _tagsHistory: string[] = [];
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  public gifList: Gif[] = [];

  constructor(private http: HttpClient) {
    this.readLocalStorage();
  }

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private organizeTagsHistory(tag: string): void {
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(t => t !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.slice(0, 10);
  }

  searchTag(tag: string):void {
    tag = tag.trim().toLowerCase();
    if (tag.length === 0) {
      return;
    }
    this.organizeTagsHistory(tag);

    const params = new HttpParams()
      .set('api_key', environment.giphyKey)
      .set('q', tag)
      .set('limit', '12');

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((response) => {
        this.gifList = response.data;
      });
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private readLocalStorage(): void {
    const history = localStorage.getItem('history');
    if (history) {
      this._tagsHistory = JSON.parse(history);

      if (this._tagsHistory.length > 0) {
        this.searchTag(this._tagsHistory[0]);
      }
    }
  }
}
