import { inject, Injectable } from '@angular/core';
import { Song } from '../models/Song';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private urlApi = 'http://localhost:3000/songs';

  private http = inject(HttpClient);

  getSongs(): Observable<Song[]>{
    return this.http.get<Song[]>(this.urlApi);
  }

  getSongById(id: number): Observable<Song | undefined>{
    return this.http.get<Song>(`${this.urlApi}/${id}`);
  }

  addSong(song: Omit<Song, 'id'>): Observable<Song> {
    return this.http.post<Song>(this.urlApi, song);
  }

  deleteSong(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlApi}/${id}`);
  }

  editSong(id: number, song: Song): Observable<void> {
    return this.http.put<void>(`${this.urlApi}/${id}`, song);
  }

  likeSong(id: number, liked: boolean): Observable<void> {
    return this.http.patch<void>(`${this.urlApi}/${id}`, {liked});
  }
}
