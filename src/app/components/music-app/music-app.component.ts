import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SongListComponent } from "../song-list/song-list.component";
import { SongFormComponent } from "../song-form/song-form.component";
import { Song } from '../../models/Song';

@Component({
  selector: 'app-music-app',
  standalone: true,
  imports: [CommonModule, SongListComponent, SongFormComponent],
  templateUrl: './music-app.component.html',
  styleUrl: './music-app.component.css'
})
export class MusicAppComponent {
  songs: Song[] = [
    { id: 1, title: 'Shape of You', artist: 'Ed Sheeran', genre: 'Pop', date: new Date('2017-01-01') },
    { id: 2, title: 'Blinding Lights', artist: 'The Weeknd', genre: 'R&B', date: new Date('2020-01-01') },
    { id: 3, title: 'Rolling in the Deep', artist: 'Adele', genre: 'Pop', date: new Date('2011-01-01') },
    { id: 4, title: 'Old Town Road', artist: 'Lil Nas X', genre: 'Country', date: new Date('2019-01-01') },
    { id: 5, title: 'Blinding Lights', artist: 'The Weeknd', genre: 'R&B', date: new Date('2021-01-01') },
  ];

 
  addSong(newSong: Omit<Song, 'id'>){
    const id : number = this.songs.length + 1 ;
    this.songs.push({id, ...newSong})
  }
  clickToDelete(id: number): void{
    this.songs = this.songs.filter(song=> song.id !==id)
  }

}
