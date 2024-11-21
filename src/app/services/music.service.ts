import { Injectable } from '@angular/core';
import { Song } from '../models/Song';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  static COMPTEUR_ID: number = 1;

  //Liste des chansons
  songs: Song[] = [
    { id: MusicService.COMPTEUR_ID++, title: 'Shape of You', artist: 'Ed Sheeran', genre: 'Pop', date: new Date('2017-01-01') },
    { id: MusicService.COMPTEUR_ID++, title: 'Blinding Lights', artist: 'The Weeknd', genre: 'R&B', date: new Date('2020-01-01') },
    { id: MusicService.COMPTEUR_ID++, title: 'Rolling in the Deep', artist: 'Adele', genre: 'Pop', date: new Date('2011-01-01') },
    { id: MusicService.COMPTEUR_ID++, title: 'Old Town Road', artist: 'Lil Nas X', genre: 'Country', date: new Date('2019-01-01') },
    { id: MusicService.COMPTEUR_ID++, title: 'Blinding Lights', artist: 'The Weeknd', genre: 'R&B', date: new Date('2021-01-01') },
  ];
  
  getSongs(): Song[]{
    return this.songs;
  }

  getSongById(id: number): Song | undefined {
    return this.songs.find(song => song.id === id);
  }

  addSong(song: Omit<Song, 'id'>): void{
    const id : number = MusicService.COMPTEUR_ID++;
    this.songs.push({...song, id})
  }

  deleteSong(id: number): void{
    this.songs = this.songs.filter(song => song.id !== id);
  }

  editSong(id: number, song: Song): void {
    const index = this.songs.findIndex(song => song.id === id);
    if(index !== -1){
      this.songs[index] = {...this.songs[index], ...song};
    } 
  }
}
