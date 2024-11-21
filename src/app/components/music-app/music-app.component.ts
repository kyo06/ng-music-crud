import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SongListComponent } from "../song-list/song-list.component";
import { SongFormComponent } from "../song-form/song-form.component";
import { Song } from '../../models/Song';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-music-app',
  standalone: true,
  imports: [CommonModule, SongListComponent, SongFormComponent],
  templateUrl: './music-app.component.html',
  styleUrl: './music-app.component.css'
})
export class MusicAppComponent {
  songs: Song[] = [];
  isForAdding: boolean = false;

  // équivalent de l'autre constructeur
  /*
  private musicService: MusicService;
  constructor(musicService: MusicService){
    this.musicService = musicService;
  }
  */

  /*
  private musicService: MusicService = inject(MusicService);
  constructor(){
    this.songs = this.musicService.getSongs();
  }
  */

  constructor(private musicService: MusicService){
    this.songs = this.musicService.getSongs();
  }

  addSong(newSong: Omit<Song, 'id'>){
    this.musicService.addSong(newSong);
  }
  clickToDelete(id: number): void{
    this.musicService.deleteSong(id);
  }
}
