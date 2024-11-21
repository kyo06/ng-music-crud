import { Injectable } from '@angular/core';
import { Song } from '../models/Song';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  songs: Song[] = [
    { id: 1, title: 'Shape of You', artist: 'Ed Sheeran', genre: 'Pop', date: new Date('2017-01-01') },
    { id: 2, title: 'Blinding Lights', artist: 'The Weeknd', genre: 'R&B', date: new Date('2020-01-01') },
    { id: 3, title: 'Rolling in the Deep', artist: 'Adele', genre: 'Pop', date: new Date('2011-01-01') },
    { id: 4, title: 'Old Town Road', artist: 'Lil Nas X', genre: 'Country', date: new Date('2019-01-01') },
    { id: 5, title: 'Blinding Lights', artist: 'The Weeknd', genre: 'R&B', date: new Date('2021-01-01') },
  ];
  
  getSongs(): Song[]{
    return this.songs;
  } 

  addSong(song: Omit<Song, 'id'>): void{
    const id : number = this.songs.length + 1 ;
    this.songs.push({id, ...song})
  }

  deleteSong(id: number): void{
    this.songs = this.songs.filter(song => song.id !== id);
  }
}
